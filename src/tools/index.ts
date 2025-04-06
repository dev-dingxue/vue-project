/**
 * 星期枚举 (0-6, 0是周日)
 */
enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

/**
 * 调度模式枚举
 */
enum ScheduleMode {
    Weekly = 'weekly',
    Daily = 'daily',
    Hourly = 'hourly'
}

/**
 * 周配置接口
 */
interface WeeklyConfig {
    days: DayOfWeek[];  // 周几执行
    hour: number;       // 执行小时 (0-23)
}

/**
 * 天配置接口
 */
interface DailyConfig {
    everyDay?: boolean;  // 是否每天执行
    monthDays?: number[]; // 每月几号执行 (1-31)
    hour: number;       // 执行小时 (0-23)
}

/**
 * 调度器选项接口
 */
interface StrictSchedulerOptions {
    task: () => void;    // 要执行的任务函数
    weekly?: WeeklyConfig; // 周配置
    daily?: DailyConfig;  // 天配置
    hourly?: number;     // 小时间隔数
    immediate?: boolean; // 是否立即执行第一次
    keepAwake?: boolean; // 是否防止浏览器休眠
}

/**
 * 严格模式的定时任务调度器 (东八区时间)
 */
class StrictScheduler {
    private task: () => void;
    private readonly mode: ScheduleMode;
    private config: WeeklyConfig | DailyConfig | { interval: number };
    private immediate: boolean;
    private keepAwake: boolean;
    private timeoutId: ReturnType<typeof setTimeout> | null;
    private isRunning: boolean;
    private wakeLock: WakeLockSentinel | null;
    private timeZoneOffset: number = 8; // 东八区固定偏移量

    constructor(options: StrictSchedulerOptions) {
        this.validateOptions(options);
        this.task = options.task;
        this.mode = this.determineMode(options);
        this.config = this.validateConfig(options);
        this.immediate = options.immediate || false;
        this.keepAwake = options.keepAwake || false;
        this.timeoutId = null;
        this.isRunning = false;
        this.wakeLock = null;
    }

    private validateOptions(options: StrictSchedulerOptions): void {
        if (!options || typeof options.task !== 'function') {
            throw new Error('必须提供要执行的任务函数');
        }
    }

    private determineMode(options: StrictSchedulerOptions): ScheduleMode {
        const modeCount = [
            options.weekly ? 1 : 0,
            options.daily ? 1 : 0,
            options.hourly !== undefined ? 1 : 0
        ].reduce((sum, count) => sum + count, 0);

        if (modeCount !== 1) {
            throw new Error('必须且只能选择一种调度模式（周、天或小时）');
        }

        if (options.weekly) return ScheduleMode.Weekly;
        if (options.daily) return ScheduleMode.Daily;
        return ScheduleMode.Hourly;
    }

    private validateConfig(options: StrictSchedulerOptions): WeeklyConfig | DailyConfig | { interval: number } {
        switch (this.mode) {
            case ScheduleMode.Weekly:
                return this.validateWeeklyConfig(options.weekly!);
            case ScheduleMode.Daily:
                return this.validateDailyConfig(options.daily!);
            case ScheduleMode.Hourly:
                return this.validateHourlyConfig(options.hourly!);
        }
    }

    private validateWeeklyConfig(config: WeeklyConfig): WeeklyConfig {
        if (!config.days || !Array.isArray(config.days)) {
            throw new Error('周配置必须提供days数组');
        }

        if (config.hour === undefined || config.hour < 0 || config.hour > 23) {
            throw new Error('小时必须在0-23范围内');
        }

        const validDays = config.days.filter(day => Object.values(DayOfWeek).includes(day));
        if (validDays.length === 0) {
            throw new Error('周几必须在0-6范围内（0是周日）');
        }

        return {
            days: [...new Set(validDays)],
            hour: config.hour
        };
    }

    private validateDailyConfig(config: DailyConfig): DailyConfig {
        if (config.hour === undefined || config.hour < 0 || config.hour > 23) {
            throw new Error('小时必须在0-23范围内');
        }

        if (config.everyDay && config.monthDays) {
            throw new Error('不能同时配置everyDay和monthDays');
        }

        if (!config.everyDay && !config.monthDays) {
            throw new Error('必须指定everyDay或monthDays');
        }

        if (config.monthDays) {
            if (!Array.isArray(config.monthDays)) {
                throw new Error('monthDays必须是数组');
            }

            const validDays = config.monthDays.filter(day => day >= 1 && day <= 31);
            if (validDays.length === 0) {
                throw new Error('月日必须在1-31范围内');
            }

            return {
                monthDays: [...new Set(validDays)],
                hour: config.hour
            };
        }

        return {
            everyDay: true,
            hour: config.hour
        };
    }

    private validateHourlyConfig(interval: number): { interval: number } {
        if (interval <= 0) {
            throw new Error('小时间隔必须大于0');
        }
        return { interval };
    }

    /**
     * 获取东八区当前时间
     */
    private getLocalTime(): Date {
        const now = new Date();
        return new Date(now.getTime() + (now.getTimezoneOffset() + this.timeZoneOffset * 60) * 60 * 1000);
    }

    private calculateNextRun(): Date {
        switch (this.mode) {
            case ScheduleMode.Weekly:
                return this.calculateWeeklyNextRun();
            case ScheduleMode.Daily:
                return this.calculateDailyNextRun();
            case ScheduleMode.Hourly:
                return this.calculateHourlyNextRun();
        }
    }

    private calculateWeeklyNextRun(): Date {
        const now = this.getLocalTime();
        const { days, hour } = this.config as WeeklyConfig;

        const candidates = days.map(day => this.getNextDayOfWeek(day, hour));
        return this.findEarliestFutureTime(candidates, now);
    }

    private calculateDailyNextRun(): Date {
        const now = this.getLocalTime();
        const config = this.config as DailyConfig;
        const { hour } = config;

        if ('everyDay' in config) {
            return this.getNextDailyTime(hour);
        } else {
            const candidates = config.monthDays!.map(day =>
                this.getNextMonthDayTime(day, hour)
            );
            return this.findEarliestFutureTime(candidates, now);
        }
    }

    private calculateHourlyNextRun(): Date {
        const now = this.getLocalTime();
        const nextRun = new Date(now);
        nextRun.setHours(nextRun.getHours() + (this.config as { interval: number }).interval);
        return nextRun;
    }

    private getNextDayOfWeek(dayOfWeek: DayOfWeek, hour: number): Date {
        const now = this.getLocalTime();
        const nextTime = new Date(now);

        nextTime.setHours(hour, 0, 0, 0);

        let daysUntilNext = dayOfWeek - now.getDay();
        if (daysUntilNext < 0 || (daysUntilNext === 0 && now.getHours() >= hour)) {
            daysUntilNext += 7;
        }

        nextTime.setDate(now.getDate() + daysUntilNext);
        return nextTime;
    }

    private getNextDailyTime(hour: number): Date {
        const now = this.getLocalTime();
        const nextTime = new Date(now);

        nextTime.setHours(hour, 0, 0, 0);

        if (nextTime <= now) {
            nextTime.setDate(nextTime.getDate() + 1);
        }

        return nextTime;
    }

    private getNextMonthDayTime(day: number, hour: number): Date {
        const now = this.getLocalTime();
        const nextTime = new Date(now);

        nextTime.setHours(hour, 0, 0, 0);
        nextTime.setDate(day);

        if (nextTime <= now) {
            nextTime.setMonth(nextTime.getMonth() + 1);

            const lastDay = new Date(
                nextTime.getFullYear(),
                nextTime.getMonth() + 1,
                0
            ).getDate();

            if (day > lastDay) {
                nextTime.setDate(lastDay);
            }
        }

        return nextTime;
    }

    private findEarliestFutureTime(candidates: Date[], now: Date): Date {
        const futureTimes = candidates.filter(time => time > now);
        return futureTimes.length > 0
            ? new Date(Math.min(...futureTimes.map(time => time.getTime())))
            : new Date(now.getTime() + 24 * 60 * 60 * 1000);
    }

    private async acquireWakeLock(): Promise<void> {
        if (!this.keepAwake || !('wakeLock' in navigator)) return;

        try {
            this.wakeLock = await (navigator as any).wakeLock.request('screen');
            this.wakeLock?.addEventListener('release', () => {
                console.log('Wake Lock 被释放');
            });
        } catch (err) {
            console.error('无法获取 Wake Lock:', err);
        }
    }

    private releaseWakeLock(): void {
        if (this.wakeLock) {
            this.wakeLock.release().then(r => {  console
                .log('text')});
            this.wakeLock = null;
        }
    }

    private executeAndSchedule(): void {
        if (!this.isRunning) return;

        try {
            this.task();
        } catch (error) {
            console.error('定时任务执行出错:', error);
        } finally {
            this.scheduleNext();
        }
    }

    private scheduleNext(): void {
        if (!this.isRunning) return;

        const nextRun = this.calculateNextRun();
        const delay = nextRun.getTime() - this.getLocalTime().getTime();
        this.timeoutId = setTimeout(() => this.executeAndSchedule(), delay);
    }

    public async start(): Promise<void> {
        if (this.isRunning) return;

        this.isRunning = true;
        await this.acquireWakeLock();

        if (this.immediate) {
            this.executeAndSchedule();
        } else {
            this.scheduleNext();
        }
    }

    public stop(): void {
        this.isRunning = false;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        this.releaseWakeLock();
    }

    public async update(newOptions: Partial<StrictSchedulerOptions>): Promise<void> {
        if (!newOptions) return;

        const wasRunning = this.isRunning;
        this.stop();

        if (newOptions.task) this.task = newOptions.task;
        if (newOptions.immediate !== undefined) this.immediate = newOptions.immediate;
        if (newOptions.keepAwake !== undefined) this.keepAwake = newOptions.keepAwake;

        if (this.mode === ScheduleMode.Weekly && newOptions.weekly) {
            this.config = this.validateWeeklyConfig(newOptions.weekly);
        } else if (this.mode === ScheduleMode.Daily && newOptions.daily) {
            this.config = this.validateDailyConfig(newOptions.daily);
        } else if (this.mode === ScheduleMode.Hourly && newOptions.hourly !== undefined) {
            this.config = this.validateHourlyConfig(newOptions.hourly);
        }

        if (wasRunning) {
            await this.start();
        }
    }
}

export { StrictScheduler, DayOfWeek, ScheduleMode };
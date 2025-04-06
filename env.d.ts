/// <reference types="vite/client" />

// env.d.ts 文件内容
interface ImportMetaEnv {
    readonly VITE_GLOBAL_KEY: string; // 全局 key
    readonly VITE_GLOBAL_DESC: string; // 全局描述
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}


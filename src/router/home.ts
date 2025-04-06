const routers = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home',
        },
        component: () => import("@/views/home/index.vue")
    }
    ,
    {
        path: '/index-1',
        name: 'index-1',
        meta: {
            title: "模板语法"
        },
        component: () => import("@/views/home/index-1.vue")
    }, {
        path: '/index-2',
        name: 'index2',
        meta: {
            title: "响应式基础"
        },
        component: () => import("@/views/home/index-2.vue")
    },
    {
        path: '/index-3',
        name: 'index3',
        meta: {
            title: "计算属性"
        },
        component: () => import("@/views/home/index-3.vue")
    }, {
        path: '/index-4',
        name: 'index4',
        meta: {
            title: "Class 与 Style 绑定"
        },
        component: () => import("@/views/home/index-4.vue")
    }, {
        path: '/index-5',
        name: 'index5',
        meta: {
            title: "条件渲染"
        },
        component: () => import("@/views/home/index-5.vue")
    }, {
        path: '/index-6',
        name: 'index6',
        meta: {
            title: "列表渲染"
        },
        component: () => import("@/views/home/index-6.vue")
    }, {
        path: '/index-7',
        name: 'index7',
        meta: {
            title: "事件处理"
        },
        component: () => import("@/views/home/index-7.vue")
    }, {
        path: '/index-8',
        name: 'index8',
        meta: {
            title: "表单输入绑定"
        },
        component: () => import("@/views/home/index-8.vue")
    }, {
        path: '/index-9',
        name: 'index9',
        meta: {
            title: "侦听器"
        },
        component: () => import("@/views/home/index-9.vue")
    }, {
        path: '/index-10',
        name: 'index10',
        meta: {
            title: "模板引用"
        },
        component: () => import("@/views/home/index-10.vue")
    }, {
        path: '/index-11',
        name: 'index11',
        meta: {
            title: "模板引用"
        },
        component: () => import("@/views/home/index-11.vue")
    }
]

export default routers
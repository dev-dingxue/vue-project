const deepComponent = [
    {
        path: "/deep-1",
        name: "deep-1",
        meta: {
            title: "深入组件",
            auth: false,
        },
        component: () => import("@/views/deepComponent/depp-1.vue"),
    },
    {
        path: "/deep-2",
        name: "deep-2",
        meta: {
            title: "深入组件2（props）",
            auth: false,
        },
        component: () => import("@/views/deepComponent/deep-2.vue"),
    },
    {
        path: "/deep-3",
        name: "deep-3",
        meta: {
            title: "深入组件3（emit）",
            auth: false,
        },
        component: () => import("@/views/deepComponent/deep-3.vue"),
    },
    {
        path: "/deep-4",
        name: "deep-4",
        meta: {
            title: "组件v-model（model）",
            auth: false,
        },
        component: () => import("@/views/deepComponent/deep-4.vue"),
    },
    {
        path: "/deep-5",
        name: "deep-5",
        meta: {
            title: "透传 Attributes（Attr）",
            auth: false,
        },
        component: () => import("@/views/deepComponent/deep-5.vue"),
    },
    {
        path: "/deep-6",
        name: "deep-6",
        meta: {
            title: "插槽 Slots",
            auth: false,
        },
        component: () => import("@/views/deepComponent/deep-6.vue"),
    },
    {
        path: "/deep-7",
        name: "deep-7",
        meta: {
            title: "Prop 逐级透传问题",
            auth: false,
        },
        component: () => import("@/views/deepComponent/deep-7.vue"),
    },
    {
        path: "/deep-8",
        name: "deep-8",
        meta: {
            title: "异步组件",
            auth: false,
        },
        component: () => import("@/views/deepComponent/deep-8.vue"),
    }
];


export default deepComponent;
const logical = [
    {
        path: "/logica-a",
        name: "logica-a",
        meta: {
            title: "逻辑复用-1",
            auth: false,
        },
        component: () => import("@/views/LogicalReuse/logica-a.vue")
    }, {
        path: "/logica-b",
        name: "logica-a",
        meta: {
            title: "内置动画",
            auth: true,
        },
        component: () => import("@/views/LogicalReuse/logica-b.vue")
    }
]

export default logical;
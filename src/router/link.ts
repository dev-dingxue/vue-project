// 进入详细的路由配置

const routers = [
    {
        path: '/link',
        name: 'link',
        meta: {
            title: '基础路由',
            auth: true
        },
        component: () => import("@/views/link/link.vue"),
        children: [
            {
                path: 'link-1/:id',
                name: 'link-1',
                component: () => import("@/views/link/link-1.vue"),
                meta: {
                    title: "link-1",
                    auth: true
                }
            }, {
                path: 'link-2',
                name: 'link-2',
                component: () => import("@/views/link/link-2.vue"),
                meta: {
                    title: "link-2",
                    auth: true
                },
                props: {
                    q: 'link-q',
                    s: 'link-s'
                }
            }, {
                path: 'link-3',
                name: 'link-3',
                component: () => import("@/views/link/link-3.vue"),
                meta: {
                    title: "link-3",
                    auth: true
                },
                query: {
                    a: '1'
                }
            }, {
                path: 'link-4',
                name: 'link-4',
                meta: {
                    title: "link-4",
                    auth: true
                },
                redirect: () => {
                    return {
                        path: "/link/link-4-1", query: {
                            q: 'link-q'
                        }
                    }
                }
            }, {
                path: 'link-4-1',
                name: 'link-4-1',
                component: () => import("@/views/link/link-4-1.vue"),
                meta: {
                    title: "link-4-1",
                    auth: true
                },
                alias: ['link-4-2'].reverse(), // 我的新名字时是 4- 2
            }
        ]
    },{
     path: '/link-login',
        name: 'link-login',
        meta: {
         title: "login",
            auth: false
        },
        component:()=> import("@/views/link/link-login.vue")
    }
]

export default routers;
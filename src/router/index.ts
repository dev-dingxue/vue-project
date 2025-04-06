import {createRouter, createWebHistory} from 'vue-router'
import data from "@/router/home.ts";
import deepComponent from "@/router/deepComponent.ts";
import logical from "@/router/Logical.ts";
import link from "@/router/link.ts";


//  dynamic Router

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...data, ...deepComponent, ...logical, ...link]
})

router.beforeEach((to, from, next): void => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title as string;
        window.localStorage.setItem("VITE_GLOBAL_KEY", import.meta.env.VITE_GLOBAL_KEY);
        window.localStorage.setItem("VITE_GLOBAL_DESC", import.meta.env.VITE_GLOBAL_DESC);
    }

    if (to.meta && to.meta?.title)
        next({path: "/link-login", query: {redirect_uri: to.fullPath}})
    else
        next()
})



export default router

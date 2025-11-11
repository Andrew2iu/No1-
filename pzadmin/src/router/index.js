import { createRouter,createWebHashHistory } from "vue-router";

import Layout from "../views/Main.vue";
import Login from "../views/login/index.vue";

const routes = [
    {
        path: "/",
        component: Layout,
    },
    {
        path: "/login",
        component: Login,
    },
];

const router=createRouter({
    // 路由数据
    routes,
    // 路由匹配模式
    //哈希模式(开发里面常用 更新时不刷新页面)  Memory模式  History模式
    history:createWebHashHistory()
})
export default router
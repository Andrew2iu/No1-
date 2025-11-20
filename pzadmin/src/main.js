import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PanelHead from "./components/panelHead.vue";

//刷新后的动态路由添加
const localData=localStorage.getItem('pz_v3pz')
if(localData){
   store.commit('dynamicMenu',JSON.parse(localData).menu.routerList)
   store.state.menu.routerList.forEach(item=>{
      router.addRoute('main',item)
   })
}

// 路由守卫
router.beforeEach((to,from)=>{
   const token= localStorage.getItem('pz_token')
   // 判断非登录页面token不存在
   if(!token&&to.path!=='/login'){
      return '/login'
   }else if(token&&to.path==='/login'){
      return '/'
   }
})


// 引入element-plus图标依赖
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.component('PanelHead',PanelHead);
// 路由挂载
app.use(router);
// store挂载
app.use(store);
app.mount("#app");

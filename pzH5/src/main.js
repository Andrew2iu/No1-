import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import directives from './utils/directives'

const app = createApp(App)
//在实例上绑定属性
app.config.globalProperties.$api = api

// 路由守卫
router.beforeEach((to, from) => {
   const token = localStorage.getItem('h5_token')
   // 判断非登录页面token不存在
   if (!token && to.path !== '/login') {
      return '/login'
   }
})


// 路由挂载
app.use(router)
// 注册自定义指令
app.use(directives)

app.mount('#app')

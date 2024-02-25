import HomeView from '../pages/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../pages/AuthView.vue'
import AuthLayout from "@/layouts/AuthLayout"
import MainLayout from "@/layouts/MainLayout"
import UsersView from "@/pages/UsersView.vue"
import store from "@/store/store";

const routes = [
  { path: '/', component: HomeView,
  meta:{
    public:false,
    layout:'Main',
    componentLayout:MainLayout
  }
},
  { path: '/users', component: UsersView,
    meta:{
      public:false,
      layout:'Main',
      componentLayout:MainLayout
}
},
  { path: '/login', 
  component: AuthView,
     meta:{
      public:true,
      layout:'Auth',
      componentLayout:AuthLayout
}
},

{ path: '/register', 
  component: AuthView,
     meta:{
      public:true,
      layout:'Auth',
      componentLayout:AuthLayout
}
},
]


const router =createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(((to)=>{
  console.log('router')
  if(to.meta.public){
    return true
  }else if(store.getters.getUserInfo?.idToken){
    return true
  }
    return "/login"
  
}))
  
export default router
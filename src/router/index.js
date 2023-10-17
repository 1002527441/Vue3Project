import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 引入NProgress进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'



const NotFound = () => import('../views/generic/NotFound.vue');

// 用户 
const UserList  = () => import('../views/user/List.vue');
const User      = () => import('../views/user/List.vue');
const Register  =() => import('../views/user/register.vue');






const routes  = [

  { path: '/', name: 'home', alias:'/home', component: HomeView},

  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下, NotFound
  { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound },

  // 用户清单，注册， 用户信息
  { path: '/user/list',name: 'userlist',component: UserList },

  // 属性名字做为接收
  { path: '/user/:id', name: 'user', component: User,  props:true},    

  { path: '/user/register',name: 'userregister',component: Register },

  //登录
  { path: '/login',name: 'login',component: () => import('../views/Login.vue')},

  //主布局
  { path: '/layout',name: 'layout',component: () => import('../views/Layout.vue')},

  //关于
  { path: '/about',name: 'about', component: () => import('../views/AboutView.vue')},

  //关于
  { path: '/counter',name: 'counter', component: () => import('../views/Counter.vue')},


];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})


router.beforeEach((to,from,next)=>{
  // 进度条
  NProgress.inc()
  next()
})

router.afterEach(()=>{
  NProgress.done()
})




export default router

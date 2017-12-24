import Home from '../components/Home.vue'
import Column from '../components/Column.vue'
import Attention from '../components/Attention.vue'
import UserInfo from '../components/UserInfo.vue'
import Detail from '../components/Detail.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import VueRouter from 'vue-router'
const routes = [
  {
    path:'/home',
    component: Home
  },
  {
    path:'/column',
    component: Column
  },
  {
    path:'/attention',
    component: Attention
  },
  {
    path:'/userInfo',
    component: UserInfo,
  },
  {
    path:'/detail',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/logout',
    component: Logout
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  }
];
const router = new VueRouter({
  mode: 'history',
  routes: routes
});
export default router

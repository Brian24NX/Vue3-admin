import type {RouteRecordRaw} from 'vue-router'
import DashboardView from '@/views/dashboard/index.vue'
import LoginView from '@/views/login/index.vue'
import {createRouter,createWebHashHistory} from 'vue-router'


const routes:Array<RouteRecordRaw> = [
    { path: '/', component: DashboardView, name: 'dashboard'},
    { path: '/login', component: LoginView, name: 'login'}
]

const router = createRouter({
    history: createWebHashHistory(),
    strict: true,
    routes, 
    scrollBehavior:() => ({top:0, left:0})
  })

export default router
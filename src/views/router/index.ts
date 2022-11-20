import type {RouteRecordRaw} from 'vue-router'
import LayoutView from '@/views/common/layout.vue'
import LoginView from '@/views/login/index.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import { useAppStore } from '@/store'



const routes:Array<RouteRecordRaw> = [
  { 
    path: '/', 
    name: 'root', 
    component: LayoutView,
    redirect: 'dashboard',
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  { path: '/login', name: 'login', component: LoginView },
];

const router = createRouter({
    history: createWebHashHistory(),
    strict: true,
    routes, 
    scrollBehavior:() => ({top:0, left:0})
  });

const whiteList = ['/login'];

router.beforeEach((to,from,next) => {
  const appStore = useAppStore();

  if(!appStore.token) {
    whiteList.indexOf(to.path) !== -1 ? next(): next(`login? redirect= ${to.path}`)
  };

  if (appStore.token && to.path == '/login') {
    next({name: 'dashboard'})
  };

  next();
});


export default router
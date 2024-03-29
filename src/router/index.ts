import type { RouteRecordRaw, RouteRecordName } from 'vue-router'
import LayoutView from '@/views/common/layout.vue'
import LoginView from '@/views/login/index.vue'
import PageLayoutView from '@/views/common/page-layout.vue'
import NotFoundView from "@/views/error/not-found.vue";
import NotAllowedView from "@/views/error/not-allowed.vue";
import { createRouter, createWebHashHistory } from 'vue-router'
import { useAppStore } from '@/store'
import { PermissionEnum } from "@/config/permission.config";
import { usePermissionStore } from "@/store/permission";


declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, undefined> {
    permission?: string;
    icon?: string;
    title?: string;
  }
};

export const MENU_ROUTE_NAME = 'menuRoot'


export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',                                // #/dashboard
    name: MENU_ROUTE_NAME,
    component: LayoutView,
    redirect: 'dashboard',
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          permission: PermissionEnum.DASHBOARD,
          title: "Dashboard",
          icon: "dashboard",
        },
      },
      {
        name: "user",
        path: "user",     //       #/user
        component: PageLayoutView,
        meta: {
          title: "Users",
          icon: "usergroup",
          permission: PermissionEnum.USER,
        },
        redirect: { name: "user-list" },
        children: [
          {
            name: "user-list",
            path: "list",        //        #/user/list
            component: () => import("@/views/user/index.vue"),
            meta: {
              title: "Users Management",
              icon: "user",
              permission: PermissionEnum.USER_LIST,
            },
          },
          {
            name: "role-list",
            path: "roles",      //         /#/user/roles
            component: () => import("@/views/user/roles.vue"),
            meta: {
              title: "Roles Management",
              permission: PermissionEnum.USER_ROLES,
              icon: "secured",
            },
          },
        ],
      },
    ],
  },
  { path: '/login', name: 'login', component: LoginView },    // BUG fixed up -----  Login path isolated
  { path: "/403", name: "not-allowed", component: NotAllowedView },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
];

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({ top: 0, left: 0 })
});

const whiteList: Array<RouteRecordName | undefined | null> = [
  "login",
  "not-found",
  "not-allowed",
];   //  These pages can be accessed at any given point.

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();

  if (!appStore.token) {
    whiteList.indexOf(to.name) !== -1 ? next() : next(`/login? redirect= ${to.path}`)
  };

  if (appStore.token && to.path === '/login') {
    next({ name: 'dashboard' })
  };

  // 判断token是否存在，判断当前访问的域名是否合法；
  // 如果不合法，跳转至403页面
  if (to.name) {
    const permissionStore = usePermissionStore();
    const hasNoPermission = !permissionStore.permissionRouteNamesList.includes(
      to.name
    );
    appStore.token &&
      hasNoPermission &&
      whiteList.indexOf(to.name) !== -1 &&
      next({ name: "not-allowed" });       // -----hasNoPermission-----403
  }
  next();
});

export default router
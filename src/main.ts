import { createApp, h } from 'vue'
import App from './App.vue'
import router from '@/router'
import TDesign from 'tdesign-vue-next'

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css'
import 'tdesign-vue-next/dist/reset.css'
import '@/assets/less/base.less'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { permissionDirective } from './directives/permission'
import { plugin } from "echarts-for-vue";
import * as echarts from "echarts";



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate )
app.use(router)
app.use(TDesign)
app.use(pinia)
app.use(plugin, { echarts, h });
app.directive('permissiom',permissionDirective)

app.mount('#app')
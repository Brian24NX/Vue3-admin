import { createApp } from 'vue'
import App from './App.vue'
import router from '@/views/router'
import TDesign from 'tdesign-vue-next'

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css'
import 'tdesign-vue-next/dist/reset.css'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate )
app.use(router)
app.use(TDesign)
app.use(pinia)

app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/views/router'
import TDesign from 'tdesign-vue-next';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import 'tdesign-vue-next/dist/reset.css';
const app = createApp(App)

app.use(router).mount('#app')
app.use(TDesign)

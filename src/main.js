import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 引入router

// 初始化全局状态
const app = createApp(App);
app.config.globalProperties.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
app.config.globalProperties.username = localStorage.getItem('username') || '';

app.use(router);
app.mount('#app');
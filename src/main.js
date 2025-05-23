// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// -------------------------------------
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';

// createApp(App).use(router).mount('#app');


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 引入router

createApp(App).use(router).mount('#app');

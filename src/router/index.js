import { createRouter, createWebHashHistory } from 'vue-router'; // 使用 createWebHashHistory
import AppHome from '../views/AppHome.vue';
import AboutUs from '../views/AboutUs.vue';
import SuccessStories from '../views/SuccessStories.vue';
import ServiceIntroduction from '../views/ServiceIntroduction.vue';
import NewsThing from '../views/NewsThing.vue';
import ContactUs from '../views/ContactUs.vue';
import Register from '../views/RegisterThe.vue';
import Login from '../views/LoginThe.vue';

const routes = [
  { path: '/', component: AppHome },
  { path: '/AppHome', component: AppHome },
  { path: '/AboutUs', component: AboutUs },
  { path: '/SuccessStories', component: SuccessStories },
  { path: '/ServiceIntroduction', component: ServiceIntroduction },
  { path: '/NewsThing', component: NewsThing },
  { path: '/ContactUs', component: ContactUs },
  { path: '/Login', component: Login },
  { path: '/Register', component: Register },
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 hash 模式
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.remove('hide');
  }
  next();
});

export default router;
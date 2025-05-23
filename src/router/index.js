import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../views/AppHome.vue'; // 修改为多单词格式
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
  { path: '/Login', component: Login},
  { path: '/Register', component: Register},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // 页面切换时显示加载动画
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.remove('hide');  // 显示加载动画
  }
  next(); // 继续路由导航
});

// router.afterEach(() => {
//   // 页面加载完成后隐藏加载动画
//   const preloader = document.querySelector('.preloader');
//   if (preloader) {
//     preloader.classList.add('hide');  // 隐藏加载动画
//   }
// });

export default router;

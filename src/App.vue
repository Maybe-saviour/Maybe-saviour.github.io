<template>
  <div id="app">
    <!-- 页面加载动画 -->
    <div class="preloader">
      <div class="loader-container">
        <div class="loader-text">
          <span>流</span>
          <span>量</span>
          <span>涡</span>
          <span>轮</span>
        </div>
        <div class="loader-ring"></div>
      </div>
    </div>

    <!-- 页面内容 -->
    <AppNavbar />  <!-- 只在这里引入一次 -->
    <router-view />  <!-- 用于渲染不同页面的内容 -->
    <AppFooter />  <!-- 只在这里引入一次 -->
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';  
import AppFooter from './components/AppFooter.vue';  

export default {
  components: { AppNavbar, AppFooter },
  mounted() {
    // 页面加载完毕后隐藏加载动画
    window.onload = () => {
      const preloader = document.querySelector('.preloader');
      preloader.classList.add('hide');  // 添加类，触发动画
    };
  }
};

setTimeout(() => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('hide');
}, 2000); // 设置2秒后隐藏加载动画

</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  background-color: #ffffff; /* 背景色 */
  color: #000000; /* 文本颜色修改为黑色 */
}

/* 清除全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 全局样式 */
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(45deg, #f3af56, #3d8fec); /* 背景渐变色改为 #ece7e0 和 #000000 */
  color: #000000; /* 文本颜色设置为黑色 */
  line-height: 1.6;
}

/* 加载动画样式 */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loader-container {
  text-align: center;
  animation: fadeIn 1s ease-out;
}

.loader-text {
  font-size: 3rem;
  font-weight: bold;
  color: #70b1ea; 
  display: flex;
  justify-content: center;
  gap: 10px;
}

.loader-text span {
  display: inline-block;
  animation: fadeInText 1.5s infinite alternate;
}

.loader-ring {
  margin-top: 20px;
  border: 5px solid #70b1ea; 
  border-top: 5px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.5s linear infinite;
}

/* Fade-in text effect */
@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Ring animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Fade-in effect for preloader */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 隐藏加载动画 */
.preloader.hide {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

/* 首页部分 */
.intro {
  text-align: center;
  padding: 60px;
  background: linear-gradient(135deg, #3d8fec, #f3af56); /* 渐变 */
  margin-top: 50px;
}

.intro h2 {
  font-size: 3rem;
  color: #000000; /* 文字颜色修改为黑色 */
}

.intro p {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #000000; /* 文字颜色修改为黑色 */
}

button {
  background-color: #c8b395;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b19163; /* 更深 */
}

/* 科技探索部分 */
.tech-exploration {
  background-color: #212121;
  padding: 50px 20px;
  text-align: center;
}

.tech-exploration h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #f3e0c7;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.card {
  background: #333;
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.card h3 {
  margin: 10px 0;
  font-size: 1.5rem;
}

.card p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.card:hover {
  transform: scale(1.05);
}
</style>

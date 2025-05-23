<template>
  <div class="home">
    <!-- 首页内容 -->
    <section id="section-1" class="intro">
      <!-- 替换封面 -->
      <img src="@/assets/封面清晰化.jpg" class="intro-img" alt="人工智能" />
    </section>

    <!-- 科技探索部分 -->
    <section id="section-2" class="tech-exploration">
      <h2>科技探索</h2>
      <div class="card-container">
        <div class="card">
          <img src="@/assets/人工智能.jpg" alt="人工智能" />
          <h3>人工智能</h3>
          <p>智能算法改变世界，探索机器如何思考。</p>
        </div>
        <div class="card">
          <img src="@/assets/量子计算.jpg" alt="量子计算" />
          <h3>量子计算</h3>
          <p>量子技术将颠覆传统计算，开启新纪元。</p>
        </div>
        <div class="card">
          <img src="@/assets/5G.jpg" alt="5G" />
          <h3>5G通信</h3>
          <p>超高速网络将带来更智能、更连接的未来。</p>
        </div>
      </div>
    </section>
  </div>

  <!-- 平台概览 -->
  <div class="platform-overview">
    <!-- 轮播图部分 -->
    <section class="carousel">
      <h2>核心理念与最新活动</h2>
    </section>

    <!-- 轮播图 -->
    <div class="carousel-container">
      <div class="carousel">
        <div
          class="carousel-items"
          :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }"
        >
          <div class="carousel-item" v-for="(item, index) in carouselItems" :key="index">
            <img :src="item.image" :alt="item.title" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <button @click="prev" class="prev">&#10094;</button>
      <button @click="next" class="next">&#10095;</button>
    </div>

    <!-- 平台简介 -->
    <section class="platform-intro">
      <h2>平台简介</h2>
      <div class="intro-content">
        <div class="intro-text">
          <p>目前我们的平台运营主要是通过小程序、网站进行运营。</p>
          <p>平台致力于提供高质量的服务和良好的用户体验，通过多种方式进行运营和推广。（微信扫描二维码体验小程序服务）</p>
          <svg
            t="1746592422839"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4322"
            width="100"
            height="100"
          >
            <path
              d="M765.44 566.3232l-199.1168 199.1168L512 819.712l-54.3232-54.272-199.1168-199.1168L312.8832 512 512 711.1168 711.1168 512l54.3232 54.3232zM765.44 258.56l-199.1168 199.1168L512 512 457.6768 457.6768 258.56 258.56l54.3232-54.272L512 403.4048l199.1168-199.1168 54.3232 54.272z"
              fill="#00C080"
              p-id="4323"
            ></path>
          </svg>
        </div>
        <div class="intro-image">
          <img src="@/assets/platform.jpg" alt="平台图片" />
        </div>
      </div>
    </section>

    <!-- 核心服务 -->
    <section class="core-services">
      <h2>核心服务</h2>
      <div class="services">
        <div class="service" v-for="(service, index) in coreServices" :key="index">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="partners">
      <h2>我们的合作伙伴</h2>
      <div class="partner-logos">
        <div class="partner">
          <img src="@/assets/睿蓝.png" alt="汽车公司" class="partner-img" />
          <p>汽车公司</p>
        </div>
        <div class="partner">
          <img src="@/assets/高校.png" alt="高校" class="partner-img" />
          <p>高校</p>
        </div>
        <div class="partner">
          <img src="@/assets/媒体.png" alt="媒体" class="partner-img" />
          <p>媒体</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 控制轮播图的数组
const carouselItems = [
  { title: '核心理念', image: require('@/assets/关键词.png') },
  { title: '最新活动', image: require('@/assets/系统发展规划.jpg') },
  { title: '重要合作', image: require('@/assets/抖音直播.jpg') },
];

// 核心服务
const coreServices = [
  {
    title: '智能IP打造系统',
    description: '为企业提供创新的智能IP打造系统，提升品牌影响力与市场竞争力。',
  },
  {
    title: '直播运营',
    description: '我们提供专业的直播运营服务，帮助企业实现线上线下无缝对接，增强品牌曝光。',
  },
  {
    title: '专业培训',
    description: '通过定制化培训课程，提升企业员工在智能化和数字化转型中的操作能力。',
  },
];

// 当前显示的轮播图索引
const currentIndex = ref(0);

// 下一张
const next = () => {
  if (currentIndex.value < carouselItems.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

// 上一张
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = carouselItems.length - 1;
  }
};

// 自动切换轮播图
setInterval(next, 3000); // 每3秒自动切换一次
</script>

<style scoped>
/* 封面部分 */
.intro {
  position: relative;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.intro-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 平台概览 */
.platform-overview {
  font-family: Arial, sans-serif;
  color: white;
  background: #121212;
  padding: 40px 20px;
  margin-top: 20px;
}

/* 轮播图部分 */
.carousel {
  text-align: center;
  margin-bottom: 50px;
}

.carousel h2 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
}

/* 轮播图容器 */
.carousel-container {
  display: flex;
  overflow: hidden;
  padding-bottom: 20px;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

/* 轮播图项 */
.carousel-items {
  display: flex;
  transition: transform 0.5s ease;
}

/* 轮播图单项 */
.carousel-item {
  width: 100%;
  flex-shrink: 0;
  text-align: center;
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

/* 鼠标悬停效果 */
.carousel-item:hover {
  transform: scale(1.1);
}

/* 图片样式 */
.carousel-item img {
  width: 100%;
  border-radius: 10px;
  transition: opacity 0.3s ease;
}

/* 图片悬停效果 */
.carousel-item img:hover {
  opacity: 0.8;
}

.carousel-item p {
  margin-top: 15px;
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
}

/* 轮播图按钮 */
.carousel-container button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 2rem;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  transition: background-color 0.3s ease;
}

/* 左侧按钮 */
.carousel-container .prev {
  left: 20px;
}

/* 右侧按钮 */
.carousel-container .next {
  right: 20px;
}

/* 鼠标悬停时按钮效果 */
.carousel-container button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

/* 平台简介 */
.platform-intro {
  margin: 20px 0;
  padding: 20px;
  background-color: #333;
  border-radius: 5px;
  overflow: hidden;
}

.platform-intro h2 {
  color: #ffcc00;
  margin-top: 0;
}

.intro-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-text {
  text-align: center;
  margin-bottom: 20px;
}

.intro-text p {
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.6;
  margin: 10px 0;
}

.intro-image img {
  max-width: 15%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 总布局 */
h2 {
  font-size: 2.5rem;
  color: #b99547;
}

h3 {
  font-size: 1.3rem;
  color: #e1a927;
}

p {
  font-size: 1.3rem;
  color: #bdc3c7;
  line-height: 1.6;
}

/* 核心服务 */
.core-services {
  margin-bottom: 50px;
}

.core-services h2 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
}

.services {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.service {
  background-color: #333;
  border-radius: 12px;
  padding: 25px;
  width: 30%;
  text-align: center;
  color: #fff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

.service:hover {
  transform: translateY(-10px);
}

.service h3 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #ffcc00;
}

.service p {
  font-size: 1.2rem;
}

/* 合作伙伴 */
.partners {
  margin-bottom: 50px;
}

.partners h2 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
}

.partner-logos {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.partner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.partner-img {
  height: 150px; /* 设置统一高度 */
  width: auto; /* 自动调整宽度以保持比例 */
  margin: 10px;
  transition: transform 0.3s ease;
}

.partner p {
  color: #fff;
  font-size: 1.2rem;
}

.partner-img:hover {
  transform: scale(1.1);
}
</style>
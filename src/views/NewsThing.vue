<template>
  <div class="news-thing">
    <!-- 最新资讯 -->
    <section class="latest-news">
      <h2><i class="fa fa-newspaper"></i> 最新资讯</h2>
      <div class="news-list">
        <div class="news-item" v-for="(news, index) in latestNews" :key="index">
          <h3><i class="fa fa-bullhorn"></i> {{ news.title }}</h3>
          <p><i class="fa fa-calendar"></i> {{ news.date }}</p>
          <p>{{ news.summary }}</p>
        </div>
      </div>
    </section>

    <!-- 媒体报道 -->
    <section class="media-reports">
      <h2><i class="fa fa-tv"></i> 媒体报道</h2>
      <div class="media-list">
        <div class="media-item" v-for="(media, index) in mediaReports" :key="index">
          <h3><i class="fa fa-newspaper"></i> {{ media.title }}</h3>
          <p><i class="fa fa-calendar"></i> {{ media.date }}</p>
          <p>{{ media.summary }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 最新资讯数据
const latestNews = [
  { 
    title: "流量涡轮发布最新活动", 
    date: "2024年1月1日", 
    summary: "流量涡轮公司近期发布了关于智能化平台的新活动，包括智能数据分析平台的上线与技术交流会的举行。" 
  },
  { 
    title: "流量涡轮与合作伙伴签署协议", 
    date: "2023年12月15日", 
    summary: "流量涡轮与全球领先的技术公司签署战略合作协议，共同推进数字化转型和智能化解决方案的应用。" 
  },
  {
    title: "行业趋势分析报告发布", 
    date: "2023年11月30日", 
    summary: "最新发布的行业趋势分析报告展示了数字化转型在各行各业中的重要作用，流量涡轮作为行业领先者，积极推动智能化技术的普及应用。" 
  }
];

// 媒体报道数据
const mediaReports = [
  { 
    title: "流量涡轮接受《科技日报》采访", 
    date: "2023年10月20日", 
    summary: "在《科技日报》的专题采访中，流量涡轮创始人谈到了公司的发展历程和未来的战略目标。" 
  },
  { 
    title: "《商业周刊》报道流量涡轮的成功案例", 
    date: "2023年9月10日", 
    summary: "《商业周刊》对流量涡轮的智能IP系统进行了深入报道，称其为推动行业创新的重要力量。" 
  }
];
</script>

<style scoped>
.news-thing {
  font-family: Arial, sans-serif;
  color: white;
  background: linear-gradient(45deg, #5b4b8a, #00bcd4); /* 与 App.vue 相同的渐变背景 */
  min-height: 100vh;
  padding: 40px;
}

/* 共有样式 */
h2 {
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

h2 i {
  margin-right: 10px; /* 图标与文字之间的间隔 */
}

h3 {
  color: #fff;
  font-size: 1.8rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

h3 i {
  margin-right: 10px; /* 图标与文字之间的间隔 */
}

p {
  color: #ddd;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* 最新资讯部分 */
.latest-news {
  background-color: #212121;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  position: relative;
}

.latest-news::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: url('https://www.example.com/your-decoration-pattern.png') no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.latest-news .news-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.latest-news .news-item {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.latest-news .news-item:hover {
  transform: scale(1.05);
}

/* 媒体报道部分 */
.media-reports {
  background-color: #212121;
  padding: 40px;
  border-radius: 10px;
  position: relative;
}

.media-reports::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: url('https://www.example.com/your-decoration-pattern.png') no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.media-reports .media-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.media-reports .media-item {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.media-reports .media-item:hover {
  transform: scale(1.05);
}
</style>

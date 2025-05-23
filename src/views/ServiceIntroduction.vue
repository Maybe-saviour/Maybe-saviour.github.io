
<template>
  <div class="flow-turbine">
    <!-- 顶部横幅 -->
    <div class="banner">
      <h1>流量涡轮</h1>
      <p> ——————</p>
    </div>

    <!-- 核心功能 -->
    <section class="core-features">
      <h2>核心功能</h2>
      <div class="feature-grid">
        <div class="feature-card" v-for="(feature, index) in coreFeatures" :key="index">
          <div class="icon-wrapper">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p class="feature-text">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- 技术优势 -->
    <section class="tech-advantages">
      <h2>技术优势</h2>
      <div class="advantage-list">
        <div class="advantage-item" v-for="(advantage, index) in techAdvantages" :key="index">
          <i :class="advantage.icon"></i>
          <div class="content">
            <h3>{{ advantage.title }}</h3>
            <p class="advantage-text">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务对象 -->
    <section class="target-clients">
      <h2>服务对象</h2>
      <div class="client-grid">
        <div class="client-card" v-for="(client, index) in targetClients" :key="index">
          <div class="client-icon">
            <i :class="client.icon"></i>
          </div>
          <h3>{{ client.title }}</h3>
          <p class="client-text">{{ client.description }}</p>
        </div>
      </div>
    </section>

    <!-- 解决痛点 -->
    <section class="pain-points">
      <h2>解决痛点</h2>
      <div class="pain-point-list">
        <div class="pain-point-item" v-for="(point, index) in painPoints" :key="index">
          <div class="icon-wrapper">
            <i class="fa fa-check"></i>
          </div>
          <p class="pain-text">{{ point.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 核心功能数据
const coreFeatures = ref([
  {
    title: '智能IP生成',
    description: '基于AI多模态技术（GAN/CNN），2小时定制品牌IP形象，效率提升87%，打破传统3-5天耗时瓶颈。',
    icon: 'fa fa-magic'
  },
  {
    title: '直播运营优化',
    description: '实时话术推荐准确率92.3%，敏感词拦截率100%，助力直播间GMV提升45%+。',
    icon: 'fa fa-broadcast-tower'
  },
  {
    title: '天梯培训系统',
    description: '动态评估学员技能（随机森林算法），完课率78%，行业平均仅40%。',
    icon: 'fa fa-chart-line'
  },
  {
    title: '全渠道推广',
    description: '整合短视频、自媒体矩阵，精准触达目标用户，曝光量破亿级。',
    icon: 'fa fa-share-alt'
  }
]);

// 技术优势数据
const techAdvantages = ref([
  {
    title: '行业首创',
    description: '动态分块算法+AI多模态融合，用户画像精准度提升30%。',
    icon: 'fa fa-certificate'
  },
  {
    title: '轻量化架构',
    description: 'Uniapp+Django混合架构，响应速度优化40%，支持跨平台操作。',
    icon: 'fa fa-laptop-code'
  },
  {
    title: '数据驱动',
    description: '依托吉利集团10万+行业案例库，智能匹配最佳解决方案。',
    icon: 'fa fa-database'
  }
]);

// 服务对象数据
const targetClients = ref([
  {
    title: '车企与品牌方',
    description: '打造高转化IP矩阵（如吉利领克官方IP）。',
    icon: 'fa fa-car'
  },
  {
    title: '4S店与经销商',
    description: '区域化IP定制，本地客流量提升35%+。',
    icon: 'fa fa-store'
  },
  {
    title: '自媒体从业者',
    description: '提供技能培训+流量变现支持，孵化成功率65%（行业平均20%）。',
    icon: 'fa fa-microphone-alt'
  }
]);

// 解决痛点数据
const painPoints = ref([
  {
    description: '告别内容同质化（多样性控制＜18%），破解IP孵化低效难题。',
    icon: 'fa fa-star'
  },
  {
    description: '降低培训成本，完课率翻倍，实现人才规模化孵化。',
    icon: 'fa fa-graduation-cap'
  }
]);
</script>

<style scoped>
:root {
  --primary-color: #5b4b8a;
  --secondary-color: #00bcd4;
  --dark-bg: #1a1a2e;
  --card-bg: #21213a;
  --text-color: #f0f0f0;
  --accent-color: #ff7b7b;
}

.flow-turbine {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  min-height: 100vh;
  padding: 20px;
  color: var(--text-color);
}

/* 顶部横幅 */
.banner {
  text-align: center;
  padding: 40px 0;
  background: rgba(0, 0, 0, 0.2); /* 背景色半透明 */
  background-image: url('@/assets/服务封面.jpg'); /* 替换为实际的图片URL */
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply; /* 混合模式 */
  border-radius: 10px;
  margin-bottom: 30px;
  position: relative;
}

.banner h1 {
  font-size: 3.5rem;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ffffff, var(--accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.banner p {
  font-size: 1.5rem;
  color: rgba(60, 66, 67, 1.0);
}

/* 公共样式 */
section {
  background-color: var(--dark-bg);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: var(--accent-color);
}

section h2 {
  font-size: 2rem;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
}

section h2::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50%;
  height: 3px;
  background: var(--accent-color);
}

/* 核心功能样式 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.feature-card {
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.icon-wrapper {
  background: rgba(255, 123, 123, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.icon-wrapper i {
  font-size: 24px;
  color: var(--accent-color);
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--accent-color);
}

.feature-text {
  font-size: 0.95rem;
  color: var(--accent-color);
  line-height: 1.6;
}

/* 技术优势样式 */
.advantage-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.advantage-item {
  display: flex;
  align-items: flex-start;
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease;
}

.advantage-item:hover {
  transform: translateX(10px);
}

.advantage-item i {
  font-size: 24px;
  color: var(--accent-color);
  margin-right: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 123, 123, 0.1);
  border-radius: 50%;
}

.advantage-item h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--accent-color);
}

.advantage-text {
  font-size: 0.95rem;
  color: var(--accent-color);
}

/* 服务对象样式 */
.client-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.client-card {
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.client-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--accent-color);
}

.client-icon {
  background: rgba(255, 123, 123, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.client-icon i {
  font-size: 20px;
  color: var(--accent-color);
}

.client-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--accent-color);
}

.client-text {
  font-size: 0.95rem;
  color: var(--accent-color);
}

/* 解决痛点样式 */
.pain-point-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.pain-point-item {
  display: flex;
  align-items: flex-start;
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 15px 20px;
  transition: transform 0.3s ease;
}

.pain-point-item:hover {
  transform: translateX(5px);
}

.pain-point-item .icon-wrapper {
  margin-right: 15px;
  margin-bottom: 0;
}

.pain-text {
  font-size: 0.95rem;
  color: var(--accent-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .flow-turbine {
    padding: 15px;
  }
  
  .banner h1 {
    font-size: 2.5rem;
  }
  
  .banner p {
    font-size: 1.2rem;
  }
  
  section h2 {
    font-size: 1.8rem;
  }
  
  .feature-card, .client-card {
    padding: 20px 15px;
  }
  
  .advantage-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }
  
  .advantage-item i {
    margin-bottom: 10px;
  }
}
</style>
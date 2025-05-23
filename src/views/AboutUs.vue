<template>
  <div class="about-us">
    <!-- 团队与使命 -->
    <section class="team-mission">
      <h2><i class="fa fa-users"></i> 团队与使命</h2>
      <div class="mission-content">
        <div class="mission-item" v-for="(mission, index) in teamMission" :key="index">
          <i :class="mission.icon"></i>
          <div class="mission-text">
            <h3>{{ mission.title }}</h3>
            <p>{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展里程碑 -->
    <section class="milestones">
      <h2><i class="fa fa-flag-checkered"></i> 发展里程碑</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(milestone, index) in developmentMilestones" :key="index">
          <div class="year">
            <i class="fa fa-calendar"></i>
            <span>{{ milestone.year }}</span>
          </div>
          <div class="event">
            <i class="fa fa-arrow-right"></i>
            <p>{{ milestone.event }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact">
      <h2><i class="fa fa-phone"></i> 联系我们</h2>
      <div class="contact-info">
        <div class="contact-item">
          <i class="fa fa-clock"></i>
          <div class="contact-text">
            <h3>7×24小时服务</h3>
            <p>15881585232 / 18306337764</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fa fa-envelope"></i>
          <div class="contact-text">
            <h3>定制咨询</h3>
            <p>提交需求48小时内专属方案送达</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 团队与使命数据
const teamMission = ref([
  {
    title: '技术基因',
    description: '由吉利学院顶尖团队研发，成员涵盖AI算法、汽车营销、数据科学领域专家。',
    icon: 'fa fa-graduation-cap'
  },
  {
    title: '产业赋能',
    description: '深度整合吉利汽车资源，提供行业Know-how与实战支持。',
    icon: 'fa fa-car'
  },
  {
    title: '愿景',
    description: '成为汽车垂直领域第一智能营销引擎，推动行业数字化升级。',
    icon: 'fa fa-bullseye'
  }
]);

// 发展里程碑数据
const developmentMilestones = ref([
  {
    year: '2023年',
    event: '服务覆盖头部品牌，IP生成效率突破2小时。'
  },
  {
    year: '2024年',
    event: '上线数字人主播模块，签约华东60%经销商。'
  },
  {
    year: '2025年',
    event: '拓展东南亚市场，目标营收破亿。'
  }
]);
</script>

<style scoped>
.about-us {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #5b4b8a, #00bcd4);
  min-height: 100vh;
  padding: 30px 20px;
  color: white;
}

/* 公共样式 */
section {
  background-color: rgba(26, 26, 46, 0.8);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  position: relative;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}

section h2 i {
  margin-right: 15px;
  color: #ff7b7b;
}

/* 团队与使命样式 */
.mission-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.mission-item {
  display: flex;
  align-items: flex-start;
}

.mission-item i {
  font-size: 1.5rem;
  color: #ff7b7b;
  margin-right: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 123, 123, 0.1);
  border-radius: 50%;
}

.mission-text h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.mission-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

/* 发展里程碑样式 */
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #ff7b7b;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -34px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ff7b7b;
}

.year {
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.year i {
  margin-right: 8px;
  color: #ff7b7b;
}

.event {
  display: flex;
  align-items: flex-start;
}

.event i {
  margin-right: 10px;
  color: #ff7b7b;
}

/* 联系我们样式 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
}

.contact-item i {
  font-size: 1.2rem;
  color: #ff7b7b;
  margin-right: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 123, 123, 0.1);
  border-radius: 50%;
}

.contact-text h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.contact-text p {
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-us {
    padding: 20px 15px;
  }
  
  section {
    padding: 25px 20px;
  }
  
  section h2 {
    font-size: 1.8rem;
  }
}
</style>
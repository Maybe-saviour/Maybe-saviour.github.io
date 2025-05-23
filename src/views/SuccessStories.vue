<template>
  <div class="success-stories">
    <!-- 合作品牌与成果 -->
    <section class="brand-cooperation">
      <h2><i class="fa fa-handshake"></i> 合作品牌与成果</h2>
      <div class="brand-grid">
        <div class="brand-card" v-for="(brand, index) in brandCooperations" :key="index">
          <h3>{{ brand.name }}</h3>
          <div class="outcome-list">
            <div class="outcome-item" v-for="(outcome, idx) in brand.outcomes" :key="idx">
              <i class="fa fa-arrow-right"></i>
              <span class="outcome-text">{{ outcome }}</span>
            </div>
          </div>
          <div class="tech-highlights">
            <h4>技术亮点：</h4>
            <p class="tech-text">{{ brand.techHighlights }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 权威背书 -->
    <section class="official-endorsement">
      <h2><i class="fa fa-award"></i> 权威背书</h2>
      <div class="endorsement-list">
        <div class="endorsement-item" v-for="(endorsement, index) in officialEndorsements" :key="index">
          <i class="fa fa-check-circle"></i>
          <p class="endorsement-text">{{ endorsement.description }}</p>
        </div>
      </div>
      <div class="partner-logos">
        <div class="logo-item" v-for="(partner, index) in partners" :key="index">
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 合作品牌与成果数据
const brandCooperations = ref([
  {
    name: '睿蓝汽车',
    outcomes: [
      '定制3D虚拟IP后，直播间互动率提升120%，GMV月均增长45%。'
    ],
    techHighlights: '结合品牌LOGO元素解构与多模态风格迁移'
  },
  {
    name: '领克官方媒体',
    outcomes: [
      '搭建IP矩阵覆盖全渠道，品牌曝光量突破2亿次，设计效率提升82%。'
    ],
    techHighlights: 'LBS算法推送本地化内容，AR技术增强用户交互'
  },
  {
    name: '华东某4S店集群',
    outcomes: [
      '区域化IP落地后，到店客流量同比增长35%，转化率提升28%。',
      '实证数据：中国软件评测中心认证响应时延＜0.5秒。'
    ],
    techHighlights: '区域化 IP 落地，客流量与转化率显著提升，响应时延＜0.5 秒获权威认证，技术实力凸显。'
  }
]);

// 权威背书数据
const officialEndorsements = ref([
  {
    description: '获6项计算机软件著作权，教育部产学合作项目指定平台。'
  },
  {
    description: '合作客户覆盖睿蓝、东风等头部品牌，孵化200+优质汽车IP。'
  }
]);

// 合作伙伴Logo数据（示例）
const partners = ref([
  {
    name: '睿蓝汽车',
    logo: 'https://via.placeholder.com/150?text=RL'
  },
  {
    name: '东风汽车',
    logo: 'https://via.placeholder.com/150?text=DF'
  },
  {
    name: '教育部',
    logo: 'https://via.placeholder.com/150?text=MOE'
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

.success-stories {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  min-height: 100vh;
  padding: 20px;
  color: var(--text-color);
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

/* 修改后的文字颜色 */
h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--accent-color); /* 修改为亮色 */
}

.outcome-text {
  font-size: 0.95rem;
  color: var(--accent-color); /* 修改为亮色 */
  line-height: 1.6;
  margin-bottom: 10px;
}

.tech-text {
  font-size: 0.95rem;
  color: var(--accent-color); /* 修改为亮色 */
  line-height: 1.6;
  margin-bottom: 10px;
}

.official-endorsement p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.endorsement-text {
  font-size: 1rem;
  color: var(--accent-color); /* 修改为亮色 */
  margin-bottom: 20px;
}

/* 合作品牌与成果样式 */
.brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.brand-card {
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.brand-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

.outcome-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.outcome-item i {
  color: var(--accent-color);
  margin-right: 10px;
  margin-top: 3px;
}

.tech-highlights {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed rgba(255, 255, 255, 0.2);
}

.tech-highlights h4 {
  font-size: 1rem;
  color: var(--accent-color);
  margin-bottom: 5px;
}

/* 权威背书样式 */
.official-endorsement {
  text-align: center;
}

.endorsement-list {
  margin-bottom: 30px;
}

.endorsement-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.endorsement-item i {
  color: var(--accent-color);
  margin-right: 10px;
  font-size: 1.2rem;
}

.partner-logos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.logo-item img {
  height: 60px;
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease;
}

.logo-item img:hover {
  transform: scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .success-stories {
    padding: 15px;
  }
  
  section h2 {
    font-size: 1.8rem;
  }
  
  .brand-grid {
    grid-template-columns: 1fr;
  }
  
  .partner-logos {
    gap: 10px;
  }
  
  .logo-item img {
    height: 40px;
  }
}
</style>
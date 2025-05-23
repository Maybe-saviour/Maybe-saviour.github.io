<template>
  <nav class="navbar">
    <!-- 页头 -->
    <header>
      <div class="logo">
        <h1>流量涡轮</h1>
      </div>
      <nav>
        <ul>
          <!-- 头部导航栏 -->
          <router-link to="/AppHome">首页</router-link>
          <router-link to="/ServiceIntroduction">服务介绍</router-link>
          <router-link to="/SuccessStories">成功案例</router-link>
          <router-link to="/AboutUs">关于我们</router-link>
          <router-link to="/NewsThing">新闻动态</router-link>
          <router-link to="/ContactUs">联系我们</router-link>

          <!-- 登录/注册部分 -->
          <li class="auth-links">
            <template v-if="isLoggedIn">
              <span>欢迎，{{ username }}</span>
              <a href="#" @click="logout">退出</a>
            </template>
            <template v-else>
              <router-link to="/login">登录</router-link>/<router-link to="/register">注册</router-link>
            </template>
          </li>
        </ul>
      </nav>
    </header>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // 从 localStorage 获取登录状态
      username: localStorage.getItem('username') || ''  // 从 localStorage 获取用户名
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      this.isLoggedIn = false;
      this.username = '';
      this.$router.push('/login'); // 退出后跳转到登录页
    }
  }
};
</script>

<style scoped>
/* 页头 */
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  position: sticky;
  top: 0;
  z-index: 10;
}

header .logo h1 {
  font-size: 2rem;
  color: white;
}

header nav ul {
  display: flex;
  list-style: none;
}

header nav ul li {
  margin-left: 20px;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #00bcd4;  /* 科技蓝，鼠标悬停时高亮 */
}

nav a.active {
  background-color: #0097a7;  /* 科技蓝，选中状态 */
}
</style>
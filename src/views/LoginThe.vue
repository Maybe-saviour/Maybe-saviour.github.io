<template>
  <div class="login-container">
    <!-- 登录部分 -->
    <div v-if="isLoginForm" class="login-form">
      <h2>登录</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
      <p>
        还没有账号？<a href="#" @click="toggleForm">去注册</a>
      </p>
    </div>

    <!-- 注册部分 -->
    <div v-else class="register-form">
      <h2>注册</h2>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="input-group">
          <label for="confirmPassword">确认密码</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <button type="submit">注册</button>
      </form>
      <p>
        已经有账号？<a href="#" @click="toggleForm">去登录</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoginForm: true, // 默认显示登录表单
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // 从localStorage读取登录状态
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
    };
  },
  methods: {
    toggleForm() {
      this.isLoginForm = !this.isLoginForm; // 切换表单显示状态
    },
    handleLogin() {
      // 向后端API发送登录请求
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          // 保存登录状态和用户名
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', this.username);
          this.isLoggedIn = true;
          this.$router.push('/AppHome'); // 登录成功后跳转到首页
        } else if (data.error) {
          alert('登录失败：' + data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('登录时发生错误，请稍后重试。');
      });
    },
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('密码不一致');
        return;
      }
      // 向后端API发送注册请求
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          this.isLoginForm = true; // 切换回登录表单
        } else if (data.error) {
          alert('注册失败：' + data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('注册时发生错误，请稍后重试。');
      });
    }
  },
  watch: {
    isLoggedIn(newVal) {
      if (newVal) {
        this.$router.push('/AppHome'); // 用户登录成功，跳转到首页
      }
    }
  }
};
</script>

<style scoped>
/* 样式部分 */
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #00bcd4;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0097a7;
}

p {
  text-align: center;
  margin-top: 15px;
}

a {
  color: #00bcd4;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
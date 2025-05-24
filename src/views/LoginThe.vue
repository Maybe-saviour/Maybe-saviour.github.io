<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/api/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        if (response.data.message === '登录成功！') {
          localStorage.setItem('isLoggedIn', 'true'); // 设置登录状态
          localStorage.setItem('username', this.username); // 存储用户名
          this.$router.push('/'); // 登录成功后跳转到首页
        } else {
          alert('登录失败，请检查用户名和密码');
        }
      })
      .catch(error => {
        console.error('登录请求失败:', error);
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0097a7;
}
</style>
<template>
  <div class="register-container">
    <h2>注册</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">注册</button>
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
    register() {
      axios.post('http://localhost:3000/api/register', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        if (response.data.message === '注册成功！') {
          localStorage.setItem('isLoggedIn', 'true'); // 设置登录状态
          localStorage.setItem('username', this.username); // 存储用户名
          this.$router.push('/'); // 注册成功后跳转到首页
        } else {
          alert('注册失败，请重试');
        }
      })
      .catch(error => {
        console.error('注册请求失败:', error);
      });
    }
  }
};
</script>

<style scoped>
.register-container {
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
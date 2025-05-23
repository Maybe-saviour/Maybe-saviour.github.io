<template>
  <div class="register-container">
    <h2>注册</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" v-model="username" id="username" placeholder="请输入用户名" required />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" v-model="password" id="password" placeholder="请输入密码" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">确认密码</label>
        <input type="password" v-model="confirmPassword" id="confirm-password" placeholder="确认密码" required />
      </div>
      <button type="submit">注册</button>
    </form>
    <p>已有账号？<router-link to="/login">登录</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('密码不一致，请重新输入！');
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
          this.$router.push('/login');
        } else if (data.error) {
          alert('注册失败：' + data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('注册时发生错误，请稍后重试。');
      });
    }
  }
};
</script>

<style scoped>
.register-container {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #70b1ea;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #4a8dbf;
}
</style>
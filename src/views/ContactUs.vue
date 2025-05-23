<template>
  <div class="contact-us">
    <!-- 联系方式 -->
    <section class="contact-info">
      <h2><i class="fa fa-phone"></i> 联系方式</h2>
      <div class="contact-details">
        <div class="contact-item">
          <h3><i class="fa fa-phone-square"></i> 电话</h3>
          <p><i class="fa fa-mobile-alt"></i> 15881585232 / 18306337764</p>
        </div>
        <div class="contact-item">
          <h3><i class="fa fa-envelope"></i> 邮箱</h3>
          <p><i class="fa fa-at"></i> 1043301296@qq.com</p>
        </div>
        <div class="contact-item">
          <h3><i class="fa fa-map-marker-alt"></i> 地址</h3>
          <p><i class="fa fa-building"></i> 四川省成都市简阳市 吉利学院(成都校区)</p>
        </div>
      </div>
    </section>

    <!-- 在线留言 -->
    <section class="online-message">
      <h2><i class="fa fa-comments"></i> 在线留言</h2>
      <form @submit.prevent="submitMessage">
        <div class="form-group">
          <label for="username"><i class="fa fa-user"></i> 用户名</label>
          <input type="text" id="username" v-model="message.username" placeholder="请输入您的用户名" required />
        </div>
        <div class="form-group">
          <label for="message"><i class="fa fa-comment-dots"></i> 留言内容</label>
          <textarea id="message" v-model="message.message" placeholder="请输入留言内容" rows="5" required></textarea>
        </div>
        <button type="submit"><i class="fa fa-paper-plane"></i> 提交留言</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref({
  username: '',
  message: ''
});

const submitMessage = async () => {
  console.log('Form submitted');
  console.log('Message data:', message.value);

  if (message.value.username && message.value.message) {
    try {
      console.log('Sending request to:', 'http://localhost:3001/api/send-message');
      console.log('Request body:', JSON.stringify(message.value));

      const response = await fetch('http://localhost:3001/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message.value),
      });

      console.log('Response status:', response.status);
      console.log('Response body:', await response.json());

      if (response.ok) {
        alert('留言已成功提交，谢谢您的反馈！');
        message.value = { username: '', message: '' };
      } else {
        alert('留言提交失败，请稍后再试。');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('留言提交失败，请稍后再试。');
    }
  } else {
    alert('请填写所有字段');
  }
};
</script>

<style scoped>
.contact-us {
  font-family: Arial, sans-serif;
  color: white;
  background: linear-gradient(45deg, #5b4b8a, #00bcd4);
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
  margin-right: 10px;
}

h3 {
  color: #fff;
  font-size: 1.5rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

h3 i {
  margin-right: 10px;
}

p {
  color: #ddd;
  font-size: 1.1rem;
  line-height: 1.6;
}

button {
  background-color: #00bcd4;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0097a7;
}

/* 联系方式部分 */
.contact-info {
  background-color: #212121;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
}

.contact-info .contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-info .contact-item {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.contact-info .contact-item:hover {
  transform: scale(1.05);
}

/* 在线留言部分 */
.online-message {
  background-color: #212121;
  padding: 40px;
  border-radius: 10px;
}

form {
  display: grid;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.2rem;
  color: #fff;
}

input,
textarea {
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  resize: vertical;
}
</style>
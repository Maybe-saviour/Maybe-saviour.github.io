const express = require('express');
const mysql = require('mysql2/promise'); // 使用 promise 版本
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// 配置 CORS 中间件，允许来自特定前端域名的请求
app.use(cors({
  origin: 'https://maybe-saviour.github.io', // 移除多余的空格
  credentials: true // 允许 cookies 和其他凭证
}));

// 数据库连接配置
const db = mysql.createPool({
  host: 'localhost',
  user: 'ELI', // 替换为你的数据库用户名
  password: '123456', // 替换为你的数据库密码
  database: 'llwl'  // 替换为你的数据库名称
}));

// 默认首页路由
app.get('/', (req, res) => {
  res.send('欢迎来到后端首页！');
});

// 测试数据库连接
app.get('/testdb', async (req, res) => {
  try {
    const [result] = await db.query('SELECT 1 + 1 AS result');
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 注册接口
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    res.status(201).json({ message: '注册成功！' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 登录接口
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const [results] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if (results.length > 0) {
      res.status(200).json({ message: '登录成功！' });
    } else {
      res.status(401).json({ error: '用户名或密码错误' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
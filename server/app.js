const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 数据库连接配置
const db = mysql.createPool({
  host: 'localhost',
  user: 'ELI', // 替换为你的Navicat数据库用户名
  password: '123456', // 替换为你的Navicat数据库密码
  database: 'llwl'  // 替换为你的数据库名称
});

// 默认首页路由
app.get('/', (req, res) => {
  res.send('欢迎来到后端首页！');
});

// 测试数据库连接
app.get('/testdb', (req, res) => {
  const sqlTest = 'SELECT 1 + 1 AS result';
  db.promise().query(sqlTest)
    .then(result => {
      res.json(result[0]);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// 注册接口
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  
  // 在实际项目中，这里应该使用密码哈希库（如bcrypt）来加密密码
  const sqlInsert = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.promise().query(sqlInsert, [username, password])
    .then(() => {
      res.status(201).json({ message: '注册成功！' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// 登录接口
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // 查询用户
  const sqlSelect = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.promise().query(sqlSelect, [username, password])
    .then(([results]) => {
      if (results.length > 0) {
        res.status(200).json({ message: '登录成功！' });
      } else {
        res.status(401).json({ error: '用户名或密码错误' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
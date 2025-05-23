const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'your_username', // 替换为你的Navicat数据库用户名
  password: 'your_password', // 替换为你的Navicat数据库密码
  database: 'your_database'  // 替换为你的数据库名称
});

module.exports = db;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// MySQL数据库连接配置
const pool = mysql.createPool({
    host: 'localhost', // 数据库主机
    user: 'root',      // 数据库用户名
    password: '123456', // 数据库密码
    database: 'file',    // 数据库名称
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 测试数据库连接
pool.promise().query('SELECT NOW()')
    .then(([rows, fields]) => {
        console.log('数据库连接成功:', rows[0]['NOW()']);
    })
    .catch(err => {
        console.error('数据库连接失败:', err);
    });

// 添加一个简单的GET路由来处理根路径的请求
app.get('/', (req, res) => {
    res.send('服务器运行正常！');
});

// 接收留言API
app.post('/api/send-message', async (req, res) => {
    try {
        const { username, message } = req.body;
        const [result] = await pool.promise().query(
            'INSERT INTO messages (username, message) VALUES (?, ?)',
            [username, message]
        );
        res.status(201).json({
            success: true,
            message: '留言已成功提交',
            data: { id: result.insertId, username, message }
        });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({
            success: false,
            error: '服务器错误'
        });
    }
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
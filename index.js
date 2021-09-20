const express = require('express');
// const mysql = require('mysql2/promise');

const todoRoute = require('./routes/todoRoute');

// const connPromise = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'todo_mysql'
// });

// connPromise
//   .then(connection => {
//     console.log('connect to DB successfully');
//     // const resultPromise = connection.query(
//     //   'INSERT INTO lists (title, due_date) VALUES ("Meet a doctor", "2021-09-19")'
//     // );
//     const resultPromise = connection.query('SELECT * FROM lists');
//     return resultPromise;
//   })
//   .then(result => {
//     console.log(result); // [rows, fields]
//   })
//   .catch(err => console.log(err));

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'todo_mysql',
//   connectionLimit: 100
// });

// pool.query('SELECT * FROM lists').then(([rows]) => {
//   console.log(rows);
// });

// const { username, password } = req.body // username = 'john', password = '1234'
// 'SELECT * FROM users WHERE username = ' + username + ' AND passowrd = ' + password
// 'SELECT * FROM users WHERE username = "john" AND passowrd = "1234"'
// username = 'john' , password = '1234; DROP TABLE users;'
// 'SELECT * FROM users WHERE username = john AND passowrd = 1234; DROP TABLE users;'

// pool
//   .execute('INSERT INTO lists (title, completed, due_date) VALUES (?, ?, ?)', ['Shopping', 1, new Date('2021-08-30')])
//   .then(result => {
//     console.log(result[0]);
//   });

// pool.execute('SELECT * FROM list WHERE id = 3')
// pool.execute('SELECT * FROM lists WHERE id = ?', [3]).then(result => console.log(result[0]));

const app = express();

app.use('/todos', todoRoute);

app.listen(8001, () => console.log('server starting on port 8001'));

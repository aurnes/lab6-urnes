const express = require('express');
const app = express();

console.log("arg\n");
var mysql = require('mysql')
var connection = mysql.createConnection({
  port  : '3306',
  host  : 'lab6.c5yppq3ojkfg.us-east-2.rds.amazonaws.com',
  user  : 'urnes',
  password  : 'D3f3nd3rs',
  database  : 'users'
});

connection.connect()
connection.query('SELECT * FROM scores', function (err, rows, fields){
  if (err) throw err
  console.log(rows[0])
})
connection.end

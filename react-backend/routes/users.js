var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body.uid);
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
    res.json(rows[0]);
  })
  connection.end
    //res.render('index', { title: 'Express' });
	//res.json(req.body);

});



module.exports = router;

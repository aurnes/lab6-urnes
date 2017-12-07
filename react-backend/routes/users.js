var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.uid);
  console.log(req.body.time);

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    port  : '3306',
    host  : 'lab6.c5yppq3ojkfg.us-east-2.rds.amazonaws.com',
    user  : 'urnes',
    password  : 'D3f3nd3rs',
    database  : 'users'
  });

  var que = "INSERT INTO scores (uid, best, date_best, solved) VALUES ('" + req.body.uid + "', '" + req.body.time + "', '2017-12-07', 1) ON DUPLICATE KEY UPDATE solved=solved+1, date_best = IF(VALUES(best) < best, VALUES(date_best), date_best), best = IF(VALUES(best) < best, VALUES(best), best)";

  connection.connect()
  connection.query(que, function (err, rows, fields){
    if (err) throw err

  })

  connection.query("SELECT * FROM scores", function (err, rows, fields){
    if (err) throw err
    console.log(rows);

  })
  connection.end

});



module.exports = router;

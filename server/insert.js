
var connect = require('./insert');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
app.use( bodyParser.json());

bodyParser = {
    json: {limit: '500mb', extended: true},
    urlencoded: {limit: '500mb', extended: true}
  };
//////////////////////////////////////////////////
////Connection MySQL
//////////////////////////////////////////////////
// connect to MySQL hosted on Amazon RDS
const mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'royhuang',
    password: 'bar',
    database: 'CCTV'
});
connection.connect();

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// wait for database
router.post('/user/insert', function (req, res) {
	
var db = connection;
//var photo = req.body.photo; real pic
var photo = 'test';
var compass = req.body.compass;
console.log(req.body);
db.query("INSERT INTO client (photo, compass) values (?,?)",[photo,compass], function (error, rows, fields) {
    if (error) {console.log(error);	throw error;}
    
    else{
        
        res.redirect('/');
    }
    
    
});


});
module.exports = router;
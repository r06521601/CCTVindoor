
'use strict'; // http://www.w3schools.com/js/js_strict.asp
// web framework
var connect = require('./connect');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
app.use( bodyParser.json());

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

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log("Error connecting database ... nn");    
        console.log(err)
    }
    });
    

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// wait for database
router.get('/user/connect', function (req, res) {
	
var db = connection;
var table = "client";
//table = req.query.table;

db.query('SELECT * FROM client', function (error, rows, fields) {
    if (error) {console.log(error);	throw error;}
    
    res.json({rows});
    
});



});

module.exports = router;
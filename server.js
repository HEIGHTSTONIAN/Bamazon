//calling pkgs to use in my code
var path = require('path');
var mysql = require('mysql');
var inquirer = require('inquirer');
var express = require('express');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "clearyourhead!@#123",
    database: "bamazon"
  });
  



//function to grab data from database
/* basic server */
var app = express();

app.use(express.static(path.resolve(__dirname,"static")));

app.get("/", function(req,res){
    res.render("index");
    res.end();
});

app.get("/get_products", function(req,res){
    var queryString = "SELECT item_id, product_name, price FROM products";
    connection.connect();
    connection.query(queryString, function(err,data){
        if (err){
            res.send({ err: err });
        }else {
            res.send({ data: data});
        }
    });
    connection.end();
});

app.listen(3000, function(){
    console.log("listening on port 3000");
})




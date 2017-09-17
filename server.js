//calling pkgs to use in my code
var path = require('path');
var mysql = require('mysql');
var inquirer = require('inquirer');
var express = require('express');
var bodyParser = require('body-parser');


function handleRequest(req,res,query){
    var queryString = query;
    connection.query(queryString, function(err,data){
        if (err){
            console.log(err);
            res.send({ err: err });
        }else {
            console.log(data);
            res.send({ data: data});
        }
    });

};
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
  
connection.connect();


//function to grab data from database
/* basic server */
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,"static")));

app.get("/", function(req,res){
    res.render("index");
    res.end();
});

app.get("/getproducts", function(req,res){
    var queryString = "SELECT item_id, product_name, price FROM products ORDER BY product_name ASC";
    handleRequest(req,res,queryString);
});

app.post("/check", function(req,res){
    var queryString = `UPDATE products SET stock_quantity = stock_quantity - ${req.body.answers.two} WHERE stock_quantity >= ${req.body.answers.two} AND item_id = ${req.body.answers.one}`;
    handleRequest(req,res,queryString);

});
app.listen(3000, function(){
    console.log("listening on port 3000");
});


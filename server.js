//calling pkgs to use in my code
var path = require('path');
var mysql = require('mysql');
var inquirer = require('inquirer');
var express = require('express');
var bodyParser = require('body-parser');

function handleRequest(req,res,query, arr=[]){
    var queryString = query;
    connection.connect();
    connection.query(queryString, arr, function(err,data){
        if (err){
            res.send({ err: err });
        }else {
            res.send({ data: data});
        }
    });
    connection.end();
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
    console.log(req);
    /*
    var queryString = "UPDATE products SET quantity = quantity - ? WHERE quantity >= ? AND id = ?";
    var arr = [req.body.answers.two, req.body.answers.two, req.body.answers.one];
    handleRequest(req,res,queryString, arr);
    */

});
app.listen(3000, function(){
    console.log("listening on port 3000");
});


var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_DB"
});

var quantityDesired;
var quantityStock;
var itemPrice;

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    productTable();
});

function productTable() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + "Price: " + res[i].price + " || " + "Quantity: " + res[i].stock_quantity + " || " + "\n")
        }
        start();
    });
}

function start() {
    inquirer
        .prompt([
            {
                name: "item",
                type: "list",
                message: "What is the id of the item(s) you would like to purchase?",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            console.log("Checking products...\n");
            quantityDesired = answer.quantity
            connection.query("SELECT price FROM products WHERE id='"+answer.item+"'",
                function (err, res) {
                    if (err) throw err;
                    itemPrice = res[0].price
                    connection.query("SELECT stock_quantity FROM products WHERE id='"+answer.item+"'",
                        function (err, res2) {
                            if (err) throw err;
                            quantityStock = res2[0].stock_quantity;
                            if (quantityStock < quantityDesired) {
                                console.log("Insufficient stock!  Would you like something else?")
                                setTimeout(productTable, 2000);
                                setTimeout(start, 5000);
                            } else {
                                console.log("You got it!")
                                connection.query(
                                    "UPDATE products SET stock_quantity=stock_quantity-'"+(quantityDesired)+"' WHERE id='"+answer.item+"'",
                                    function (err, res3) {
                                        updatedTable();
                                    }
                                )
                            }
                        
                        }
                    );
                }
            )
        });
};

function updatedTable() {
    console.log("Updating inventory...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + "Price: " + res[i].price + " || " + "Quantity: " + res[i].stock_quantity + " || " + "\n")
        }
        console.log("Your total today is: $" + quantityDesired * itemPrice);
    });
}
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});

setTimeout(start, 3000);

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
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
            var quantityDesired = answer.quantity
            var quantityStock;
            connection.query("SELECT stock_quantity FROM products WHERE ?",
                [
                    {
                        id: answer.item
                    }
                ],
                function (err, res) {
                    if (err) throw err;
                    quantityStock = res[0].stock_quantity;
                    if (quantityStock < quantityDesired) {
                        console.log("Insufficient stock!  Would you like something else?")
                        setTimeout(readProducts, 2000);
                        setTimeout(start, 5000);
                    } else {
                        console.log("You got it!")
                        console.log(quantityDesired + "||" + quantityStock);
                    }
                }
            );
        });
};

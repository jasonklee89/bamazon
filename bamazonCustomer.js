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
    start();
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
        connection.end();
    });
}

function start() {
    inquirer
        .prompt([
            {
                name: "item",
                type: "list",
                message: "What is id of item(s) you would like to purchase?",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  }
            }
        ])
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            connection.end()
        });
}
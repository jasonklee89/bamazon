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
    start();
});




function start() {
    inquirer
        .prompt([
            {
                name: "options",
                type: "list",
                message: "What would you like to do?",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
            }
        ])
        .then(function (answer) {
            switch (answer.options) {
                case "View Products for Sale":
                    viewProducts();
                    break;
                case "View Low Inventory":
                    viewLowInventory();
                    break;
                case "Add to Inventory":
                    addToInventory();
                    break;
                case "Add New Product":
                    addNewProduct();
                    break;
            }

        })
};

var viewProducts = function () {
    connection.query("SELECT id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " || " + res[i].product_name + " || " + "Price: " + res[i].price + " || " + "Quantity: " + res[i].stock_quantity + " || " + "\n");
        }
        setTimeout(start, 1000);
    })
};

var viewLowInventory = function () {
    for (var i = 0; i < 5; i++) {
        connection.query("SELECT id, product_name, price, stock_quantity FROM products WHERE stock_quantity='" + [i] + "'",
            function (err, res) {
                if (err) throw err;
                // if (res[0] === undefined){
                //     return;
                // }
                for (var j = 0; j < res.length; j++) {
                    console.log(res[j].id + " || " + res[j].product_name + " || " + "Price: " + res[j].price + " || " + "Quantity: " + res[j].stock_quantity + " || " + "\n");
                } 
        })
    }
    setTimeout(start, 1000);
}

var addToInventory = function () {
    inquirer
    .prompt([
        {
            name: "item",
            type: "input",
            message: "What is the id of the item you would like to add to?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                console.log("Please enter a number")
                return false;
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to add?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                console.log("Please enter a number")
                return false;
            }
        }
    ])
    .then(function (answerTwo) {
        connection.query(
            "UPDATE products SET stock_quantity=stock_quantity+'"+answerTwo.quantity+"' WHERE id='"+answerTwo.item+"'",
            function (err, res) {
                if (err) throw err;
                connection.query("SELECT id, product_name, price, stock_quantity FROM products", function (err, res2) {
                    if (err) throw err;
                    console.log("Here is the updated inventory!")
                    for (var i = 0; i < res2.length; i++) {
                        console.log(res2[i].id + " || " + res2[i].product_name + " || " + "Price: " + res2[i].price + " || " + "Quantity: " + res2[i].stock_quantity + " || " + "\n");
                    }
                })
            }
        )
        setTimeout(start, 1000);
    })
}

var addNewProduct = function () {
    inquirer
    .prompt([
        {
            name: "productname",
            type: "input",
            message: "What product would you like to add?"
        },
        {
            name: "department",
            type: "input",
            message: "What department is it in?"
        },
        {
            name: "price",
            type: "input",
            message: "What is the selling price?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "What is the quantity in stock?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
            }
        },
    ])
    .then(function (answer) {
        var newProduct = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('"+answer.productname+"', '"+answer.department+"', '"+answer.price+"', '"+answer.quantity+"')"
        connection.query(newProduct,
            function (err, res) {
                if (err) throw err;
            })
        viewProducts();
    })
}


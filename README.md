# Bamazon
## Overview
* An Amazon-like storefront built with MySQL and Node. 
* The bamazonCustomer.js file will take in orders from customers from a pre-set list of products and deplete stock from the store's inventory once a product is purchased.  
* The bamazonManager.js file allows you to View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product.  
    * The Manager file will then prompt you with a series of guides, allowing you to make specifications for your actions.

## Functionality
* Bamazon Customer
    * The product table is rendered into Node from the MySQL database
    * The user is then asked a series of questions using inquirer, pertaining to which items should be purchased, and how many they would like to purchase
    * Node then sends this data to MySQL, which then performs an update
    * The quantity will then be updated in the product table, and the code will then perform a simple calculation to determine the total cost of the item(s) purchased
* Bamazon Manager
    * The general format is the same--inquirer asks a series of questions to the user, and node performs a series of queries to update the database according to the input
    * There is further functionality with the Manager, including checking Low Inventory (where quantity is less than 5), adding to Inventory, and adding an entirely New Product

## Set Up
* Be sure to connect your localhost to port 8889
* Copy and paste the contents of bamazon.sql into MySQLWorkbench
* Use node to run either bamazonCustomer.js or bamazonManager.js
    * i.e. type `node bamazonCustomer.js` into the root file's command line

## How to Use
* Run either `node bamazonCustomer.js` or `node bamazonManager.js`
* Take note of the id (left-most column) of the item you wish to purchase or perform other actions on
* Follow the prompts given

## Screenshots
### Bamazon Customer
![Bamazon Customer](/screenshots/bamazonCustomer.png?raw=true "Bamazon Customer")
### Bamazon Manager
![Bamazon Manager](/screenshots/bamazonManager.png?raw=true "Bamazon Manager")

## Video Walkthrough
https://youtu.be/zU1kAj8n7aQ


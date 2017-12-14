//display all of the items avaliable for sale

//ids
//names
//prices of producuts for sale

//user prompt
//ask the id of the product they would like to purchase

//ask how many units of the product they would like to buy

//once ordered the app will check the store has enough of the product to meet customers request.
//no- the app will log "insufficient quantitiy"
//if it does it will update the SQL datasbase to reflect remaining quantity
//Once it updates it will show customer total cost of purchase
var mysql = require("mysql");
var inquirer = require("inquirer");



var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "",
	database: "bamazon"
});

connection.connect(function(err){
	if (err) throw err;
	start();
});

function start(){
	inquirer
		.prompt({
			name: "confirm",
			type: "confirm",
			message: "Welcome to Bamazon, would you like to shop?"
		}).then(function(answer){
			if(answer.confirm){
				shop();
			}else{
				console.log("Thanks for coming, have a nice day!")
				connection.end();
			}
		});		
	}

function shop() {
	connection.query("SELECT * FROM products", function(err, results){
		if (err) throw err;
	
	inquirer
		.prompt([
		{
			name: "productList",
			type: "rawlist",
			choices: function() {
				var productsArray = [];
				for(var i = 0; i < results.length; i++){
					productsArray.push(results[i].product_name)
				}
				return productsArray;
			},
			message: "Which item would you like to purchase?"
			},
			{
				name: "purchase",
				type: "input",
				message: "How many would you like to purchase?",
				/*validate: function(value) {
					if (isNan(value) === false){
						return true;
					}
					return false;
				}*/
			}		
			//limit entries to number
			//check stock
		])
		.then(function(ans) {
			var chosenItem;
			for (var i = 0; i < results.length; i++) {
				if (results[i].product_name === ans.productList)
				{
					chosenItem = results[i];
				}
			}
			
			if(chosenItem.stock >= parseInt(ans.purchase)){
				connection.query(
					//console.log(chosenItem.stock);
					"UPDATE products SET ? WHERE ?",
					[
						{
							stock: ans.purchase
						},
						{
							item_id: chosenItem.item_id
						}
					],
					function(error){
						if(error) throw error;
						//price
						console.log("----------------------------");
						console.log("Quanitity: " + ans.purchase + "\nItem: "+ ans.productList + "\nYour total is: $"+ans.purchase * chosenItem.price);
						console.log("----------------------------");
						
						//total(ans.purchase, chosenItem.price);
						//console.log(total);
						start();
					}
				);
			}
			else{
				console.log("Insufficient quantity!");
				start();
			}
		});
	})
}
/*
function total(x, y){
							return x * y;
						}
						var total = function (x, y) {
					    return x * y;


						};*/


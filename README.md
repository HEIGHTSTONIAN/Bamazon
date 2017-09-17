# Bamazon

Bamazon is an Amazon-like storefront with the MySQL skills. The app takes in orders from customers and depletes stock from the store's inventory.

# Customer View

The customer view is served as a webpage using Nodejs and Express.js. The Customer view displays all the items available in the inventory. It displays the items' ids, names and prices.

![Customer View](readme_assets/customerview.jpg "Customer View")


# Buy

Click the "Buy" button and buyer is prompted with choosing which item to purchase. 
![Buyer Option](readme_assets/buyeroption.jpg "Buyer Option")


Then how many they would like to purchase. 
![How many to Purchase](readme_assets/howmanytopurchase.jpg "How many to purchase")

If the buyer goes over inventory, the browser will display "out of stock" to the buyer. 

![Out of Stock](readme_assets/outofsock.jpg "Out of Stock")


If the buyer wants a number within the inventory supply the stock will reduce to new quanity in stock. 


When it's out of stock, the inventory will deplete supply. 


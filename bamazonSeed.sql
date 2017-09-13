DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE IF NOT EXISTS bamazon;

USE bamazon;

CREATE TABLE IF NOT EXISTS products (

    item_id INTEGER() AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INTEGER NULL,
    PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products
(product_name, department_name, price, stock_quantity);

VALUES
('YachtLoc', 'Boat', 50.50, 10)
('PlaneLoc', 'Air', 75.00, 5)
('TrainCarLoc', 'Tube', 25.00, 15)
('Actors', 'Talent', 35.00, 5)
('Models', 'Talent', 30.00, 10)
('Crew', 'Staff', 45.00, 20)  
('Director', 'Staffing', 150.00, 10)
('Producers', 'Production', 50.00, 10)
('Photographer', 'Photography', 60.00, 10)
('Stylist', 'Staffing', 45.00, 10)
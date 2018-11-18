## Project Title

Vending Machine App for Testing Driven Development

## Description and Objective

- The objective is to create a vending machine in Javascript. It should have 10 well-formed test using jest.
- The vending machine does not require a UI

## 10 Tests:

Query products field

- should return the name and item count
- should return name and price

Query Inventory

- should return Vending Machine Inventory

Refill Product Inventory

- should return product count of 10 each item

Refill Coins

- should return coin count of 50 each coin

Negative Payment

- should not dispense an item if the payment is less than item price
- should return negative balance if the payment is less than the item price

Dispense Product

- should dispense an item only when payment is equal to the item price
- should dispense an item and return change
- should return the item count when dispensing an item

Dispense Coins

- should return change
- should return change as a coin and the fewest number possible

Query Coin Count

- should return the coin count

![screen shot 2018-11-18 at 2 29 01 pm](https://user-images.githubusercontent.com/38735598/48679342-b8c42a80-eb43-11e8-9b5f-28edb5d423fa.png)

##Installing

- git clone or download https://github.com/phinchik/vending-machine.git
- cd to vending-machine
- npm install

## Run Jest Tests

- npm test

## Author

- Jenny Gutierrez

class Machine {
  constructor(json) {
    this.data = require(json);
  }

  queryName(title) {
    return {
      name: this.data.products[title].name,
      count: this.data.products[title].count
    };
  }
  queryPrice(title) {
    return {
      name: this.data.products[title].name,
      price: this.data.products[title].price
    };
  }

  queryInventory() {
    const inventory = Object.entries(this.data.products);

    return inventory
      .reduce((acc, product) => {
        acc.push(`${product[1].name}: ${product[1].count}`);
        return acc;
      }, [])
      .join(", ");
  }

  refillInventory() {
    const inventory = Object.entries(this.data.products);
    let total = 0;
    inventory.map(product => {
      if (product[1].count < 10) {
        product[1].count = 10;
      }
      total += product[1].count;
    });
    return total;
  }

  refillCoins() {
    const inventory = Object.entries(this.data.coins);
    let total = 0;
    inventory.map(coins => {
      if (coins[1].count < coins[1].max) {
        coins[1].count = coins[1].max;
      }
      total += coins[1].max;
    });
    return total;
  }

  negativePayment(title, payment) {
    let itemName = this.data.products[title].name;
    let itemPrice = this.data.products[title].price;
    let productCount = this.data.products[title].count;

    let purchase = {
      balance: "",
      item: "",
      count: ""
    };

    if (payment < itemPrice) {
      purchase.balance = payment - itemPrice;
      purchase.item = itemName;
      purchase.count = productCount;
    }
    return purchase;
  }

  dispenseProduct(title, payment) {
    let itemName = this.data.products[title].name;
    let itemPrice = this.data.products[title].price;
    let productCount = this.data.products[title].count;

    let purchase = {
      change: "",
      item: "",
      count: ""
    };

    if (payment === itemPrice || payment > itemPrice) {
      purchase.change = payment - itemPrice;
      purchase.item = itemName;
      purchase.count = productCount -= 1;
    }
    return purchase;
  }

  diapenseCoins(amount) {
    var coins = [100, 50, 20, 10, 5, 2, 1, 0.25, 0.1, 0.05];
    var result = {};

    for (var i = 0; amount > 0 && i < coins.length; i++) {
      var value = coins[i];

      if (value <= amount) {
        result[value] = Math.floor(amount / value);
        amount -= value * result[value];
      }
    }

    return result;
  }

  queryCoinCount(title) {
    return {
      count: this.data.coins[title].count,
      value: this.data.coins[title].value
    };
  }

  // refillEmptySlots(slot) {
  //   const inventory = Object.entries(this.data.products);
  //   console.log("this>>>>>", inventory);

  //   inventory.filter(item => {
  //     item[1].count === 0 && item[1].slot === slot;
  //   });
  // }
}

module.exports = Machine;

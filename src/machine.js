class Machine {
  constructor(json) {
    this.data = require(json);
  }

  queryName(title) {
    return { name: this.data.products[title].name };
  }
  queryPrice(title) {
    return { price: this.data.products[title].price };
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

  dispenseProductPayment(title, money) {
    let item = this.data.products[title];

    let purchase = {
      change: "",
      item: ""
    };

    if (money === item[title].price) {
      purchase.change = "no change needed";
      purchase.item = item[title].name;

      return purchase;
    }
  }

  // dispenseInventory(title) {
  //   const invCoins = Object.entries(this.data.coins);
  //   const invProducts = Object.entries(this.data.products);
  //   const payment = invCoins[4][1].value;
  //   console.log("invProducts", invProducts);

  //   const newInventory = invProducts[0].map(product => {
  //     console.log("product >>>", product.price, payment);
  //     if (product.name === title && product.price < payment) {
  //       product.count -= 1;
  //     } else {
  //       return "insuficient fund";
  //     }
  //     return product;
  //   });

  //   console.log("@@@@@@@", newInventory);

  // const product = invProducts.filter(product => {
  //   return product[0] === title;
  // });

  // const productCount = product[0][1].count;

  // console.log('invProducts ')
  // let productCount = invProducts[0][1].count;
  // console.log("count", productCount[0].find(title));

  // let payment = invCoins[4][1].value;
  // invProducts.forEach(item => {
  //   console.log("itemmmmmm", item[1].price, payment);

  //   if (item[1].price < payment) {
  //     return productCount - 1;
  //   } else {
  //     return productCount;
  //   }
  // });
  // return (productCount = { count: this.data.products[title].count });
  // }
}

module.exports = Machine;

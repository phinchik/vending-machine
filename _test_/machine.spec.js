const Machine = require("../src/machine.js");

describe("Machine", () => {
  let VendingMachine;

  beforeEach(() => {
    VendingMachine = new Machine("../products.json");
  });

  describe("QueryProducts fields", () => {
    it("should return the name of the item and the item count", () => {
      expect(VendingMachine.queryName("kitkat")).toEqual({
        name: "kitkat",
        count: 8
      });
    });

    it("should return the name and price of the item", () => {
      expect(VendingMachine.queryPrice("kitkat")).toEqual({
        name: "kitkat",
        price: 1.75
      });
    });
  });

  describe("queryInventory", () => {
    it("returns Vending Machine Inventory", () => {
      expect(VendingMachine.queryInventory()).toBe(
        "kitkat: 8, ferrero: 10, water: 0, lays: 2, timtam: 1"
      );
    });
  });

  describe("refillProductInventory", () => {
    it("should return product count of 50 each item has 10 product count", () => {
      expect(VendingMachine.refillInventory()).toEqual(50);
    });
  });

  describe("refillCoins", () => {
    it("should return coin count = 250 each coin has 50 coin count", () => {
      expect(VendingMachine.refillCoins()).toEqual(250);
    });
  });

  describe("negativePayment", () => {
    it("should not dispense an item if the payment is less than item price", () => {
      expect(VendingMachine.negativePayment("lays", 1)).toEqual({
        balance: -0.5,
        item: "lays",
        count: 10
      });
    });

    it("should return negative balance if the payment < the item price", () => {
      expect(VendingMachine.negativePayment("lays", 0.5)).toEqual({
        balance: -1,
        item: "lays",
        count: 10
      });
    });
  });

  describe("dispenseProduct", () => {
    it("should dispense an item only when payment = to the item price", () => {
      expect(VendingMachine.dispenseProduct("kitkat", 1.75)).toEqual({
        change: 0,
        item: "kitkat",
        count: 9
      });
    });

    it("should dispense an item and return change", () => {
      expect(VendingMachine.dispenseProduct("kitkat", 2.0)).toEqual({
        change: 0.25,
        item: "kitkat",
        count: 9
      });
    });

    it("should return the item count when dispensing an item", () => {
      expect(VendingMachine.dispenseProduct("ferrero", 4.0)).toEqual({
        change: 0.75,
        item: "ferrero",
        count: 9
      });
    });
  });

  describe("dispenseCoins", () => {
    it("should return change", () => {
      expect(VendingMachine.diapenseCoins(3.75)).toEqual({
        2: 1,
        1: 1,
        0.25: 3
      });
    });

    it("should return change as a coin and the fewest number possible", () => {
      expect(VendingMachine.diapenseCoins(0.85)).toEqual({
        0.25: 3,
        0.05: 1
      });
    });
  });

  describe("queryCoinsCount", () => {
    it("should return the coin count", () => {
      expect(VendingMachine.queryCoinCount("nickel")).toEqual({
        count: 50,
        value: 0.05
      });
    });
  });

  // describe("RefillEmptySlot", () => {
  //   it("should refill empty slot", () => {
  //     expect(VendingMachine.refillEmptySlots(3)).toEqual("hersheys", {
  //       name: name,
  //       slot: 2,
  //       price: 2.25,
  //       count: 10
  //     });
  //   });
  // });
});

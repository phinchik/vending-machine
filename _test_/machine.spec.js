const Machine = require("../src/machine.js");

describe("Machine", () => {
  let VendingMachine;

  beforeEach(() => {
    VendingMachine = new Machine("../products.json");
  });

  describe("When name is given", () => {
    it("should return the name of the item", () => {
      expect(VendingMachine.queryName("kitkat")).toEqual({ name: "kitkat" });
    });

    it("should return the price of the item", () => {
      expect(VendingMachine.queryPrice("kitkat")).toEqual({ price: 1.75 });
    });
  });

  describe("When the vending machine has a inventory", () => {
    it("Print Vending Machine Inventory", () => {
      expect(VendingMachine.queryInventory()).toBe(
        "kitkat: 8, ferrero: 10, water: 0, lays: 2, timtam: 1"
      );
    });
  });

  describe("When the vending machine Inventory is less than 10", () => {
    it("should return count = 10", () => {
      expect(VendingMachine.refillInventory()).toEqual(50);
    });
  });

  describe("When the vending machine coins is less than 50", () => {
    it("should return count = 50", () => {
      expect(VendingMachine.refillCoins()).toEqual(250);
    });
  });

  describe("When the payment is greater than the price value", () => {
    it("should dispense an item", () => {
      expect(VendingMachine.dispenseInventory("kitkat")).toEqual({ count: 9 });
    });
  });

  // describe("dispenseProductPayment", () => {
  //   it("should dispense product only upon payment", () => {
  //     expect(VendingMachine.dispenseProductPayment("kitkat", 1.75)).toEqual({
  //       change: "0.25",
  //       item: "kitkat"
  //     });
  //   });
  // });
});

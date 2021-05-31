/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
  this.n = n;
  this.discount = discount / 100;
  this.prices = {};
  for (let i = 0; i < products.length; i++) {
    this.prices[products[i]] = prices[i];
  }
  this.count = 0;
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
  this.count++;
  const discount = this.count % this.n ? 1 : (1 - this.discount);
  let bill = 0;
  for (let i = 0; i < product.length; i++) {
    bill += this.prices[product[i]] * amount[i];
  }
  return bill * discount;
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */

const cashier = new Cashier(
  3,
  50,
  [1, 2, 3, 4, 5, 6, 7],
  [100, 200, 300, 400, 300, 200, 100]
);
console.log(cashier);
console.log(cashier.getBill([1,2],[1,2]));                        // return 500.0, bill = 1 * 100 + 2 * 200 = 500.
console.log(cashier.getBill([3,7],[10,10]));                      // return 4000.0
console.log(cashier.getBill([1,2,3,4,5,6,7],[1,1,1,1,1,1,1]));    // return 800.0, The bill was 1600.0 but as this is the third customer, he has a discount of 50% which means his bill is only 1600 - 1600 * (50 / 100) = 800.
console.log(cashier.getBill([4],[10]));                           // return 4000.0
console.log(cashier.getBill([7,3],[10,10]));                      // return 4000.0
console.log(cashier.getBill([7,5,3,1,6,4,2],[10,10,10,9,9,9,7])); // return 7350.0, Bill was 14700.0 but as the system counted three more customers, he will have a 50% discount and the bill becomes 7350.0
console.log(cashier.getBill([2,3,5],[5,3,2]));                    // return 2500.0
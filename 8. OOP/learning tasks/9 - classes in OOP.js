/* Cart.js
Write and export by default Cart class that is a cart of online store.
Interface:
--- addItem(item, count) – adds items to cart. Item looks like this: {item: { name: 'car', price: 3 }, count: 5}
--- getItems – returns items: [{ item, count }, { item, count }, ...]
--- getCost – returns full cart cost. Mind the price and the amount of items.
--- getCount – returns the full amount of items in the cart.
*/

class Cart {
  constructor() {
    this.items = [];
  }
  addItem(item, count) {
    this.items.push({ item, count });
  }
  getItems() {
    return this.items;
  }
  getCost() {
    return this.items.reduce(
      (acc, good) => (acc += good.item.price * good.count),
      0
    );
  }
  getCount() {
    return this.items.reduce((acc, item) => (acc += item.count), 0);
  }
}

/////// TESTS
const cart = new Cart();
console.log(cart.getItems()); // []

cart.addItem({ name: "car", price: 3 }, 5);
console.log(cart.getItems()); // [{ item: { name: 'car', price: 3 }, count: 5 }];
console.log(cart.getCost()); // 15
console.log(cart.getCount()); // 5

cart.addItem({ name: "house", price: 10 }, 2);
console.log(cart.getItems());
/*
[
  { item: { name: 'car', price: 3 }, count: 5 },
  { item: { name: 'house', price: 10 }, count: 2 },
];
 */
console.log(cart.getCost()); // 35
console.log(cart.getCount()); // 7

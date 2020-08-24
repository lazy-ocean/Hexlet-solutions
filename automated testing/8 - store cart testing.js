/* tests/cart.test.js
Write tests for the cart of the online-store.
Its functions include:
-- makeCart – creates a new cart ({object})
-- addItem(good, count) – adds products and their count to the cart. Product is an object that has two keys: name and price
-- getItems – returns all added products is the form of [{ product, count }, { product, count }, ...]
-- getCost – returns the whole sum of the cart. Counts as the sum all prices for every product and its count
-- getCount – returns the number of items in the cart.
*/

test("cart items", () => {
  const cart = makeCart();
  // getting the number of items and cost with the empty cart
  expect(cart.getItems().length).toEqual(0);
  expect(cart.getCount()).toEqual(0);
  expect(cart.getCost()).toEqual(0);
  // getting the number of items and cost with one product added
  cart.addItem({ name: "avocado", price: 3 }, 2);
  expect(cart.getItems().length).toEqual(1);
  expect(cart.getCount()).toEqual(2);
  expect(cart.getCost()).toEqual(6);
  // getting the number of items and cost with second product added
  cart.addItem({ name: "cucumber", price: 1 }, 7);
  expect(cart.getItems().length).toEqual(2);
  expect(cart.getCount()).toEqual(9);
  expect(cart.getCost()).toEqual(13);
});

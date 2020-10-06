/* rational numbers
Write a make() function that creates a rational numbers and some methods to work with it. This function is similar to the one that was in the Abstractions module, but now you need to use object and its methods.
--- getNumer() - returns a numerator of a rational number
--- getDenom() - returns a denomerator of a rational number
--- add() - takes one more rational number and returns the sum as a new number.
--- toString() - returns a string out of rational number ('1/2')
*/

const make = (num, den) => ({
  numer: num,
  denom: den,
  getNumer: function getNumer() {
    return this.numer;
  },
  getDenom: function getDenom() {
    return this.denom;
  },
  toString: function toString() {
    return `${this.numer}/${this.denom}`;
  },
  add: function add(rat) {
    let a = this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer();
    let b = this.getDenom() * rat.getDenom();
    return make(a, b);
  },
});

export default make;

////// TESTS
const rat1 = make(3, 9);
console.log(rat1.getNumer()); // 3
console.log(rat1.getDenom()); // 9

const rat2 = make(10, 3);
const rat3 = rat1.add(rat2);
console.log(rat3.toString()); // '99/27'

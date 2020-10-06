/* rational numbers
Write a series of functions to work with rational numbers:=. Remember to work with abstractions.
--- makeRational() - takes a numer and a denom as numbers and returns a rational number. Remember to bring the number to its canonical form, i.a 5/10 to 1/2 and so on.
--- getNumer() - takes a rational number and returns its numerator
--- getDenom() - takes a rational number and returns its denominator
--- add() - takes two rational numbers and returns its sum
--- sub() - takes two rational numbers and substracts one from the other.
--- ratToString() - returns a string out of rational number ('1/2')
*/
const greatestDivisor = (a, b) => {
  if (!b) return a;
  return Math.abs(greatestDivisor(b, a % b));
};

const makeRational = (numer, denom) => {
  const grDiv = greatestDivisor(numer, denom);
  return { numer: numer / grDiv, denom: denom / grDiv };
};

const getNumer = (rational) => rational.numer;
const getDenom = (rational) => rational.denom;

const add = (rat1, rat2) => {
  const numer1 = getNumer(rat1);
  const numer2 = getNumer(rat2);
  const denom1 = getDenom(rat1);
  const denom2 = getDenom(rat2);
  let denom = denom1 * denom2;
  let numer = numer1 * denom2 + numer2 * denom1;
  return makeRational(numer, denom);
};

const sub = (rat1, rat2) => {
  const numer1 = getNumer(rat1);
  const numer2 = getNumer(rat2);
  const denom1 = getDenom(rat1);
  const denom2 = getDenom(rat2);
  let denom = denom1 * denom2;
  let numer = numer1 * denom2 - numer2 * denom1;
  return makeRational(numer, denom);
};

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

/////// TESTS
const rat1 = makeRational(3, 9);
console.log(getNumer(rat1)); // 1
console.log(getDenom(rat1)); // 3

const rat2 = makeRational(10, 3);
console.log(add(rat1, rat2)); // makeRational(11, 3))
console.log(sub(rat1, rat2)); // makeRational(-3, 1))

const rat3 = makeRational(-4, 16);
console.log(getNumer(rat3)); // -1
console.log(getDenom(rat3)); // 4

const rat4 = makeRational(12, 5);
console.log(add(rat3, rat4)); // makeRational(43, 20)
console.log(sub(rat3, rat4)); // makeRational(-53, 20)
console.log(ratToString(rat1)); // '1/3'
console.log(ratToString(rat3)); // '-1/4'

const rat5 = makeRational(1, 15);
const rat6 = makeRational(4, 25);
console.log(add(rat5, rat6)); // makeRational(17, 75)
console.log(sub(rat5, rat6)); // makeRational(-7, 75)

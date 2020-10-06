/* Money.js
Write a 'Money' abstraction: it can work with two currencies: usd and eur, add money and format the sum.
--- Money(value, currency = 'usd') – makes constructor Money
--- Money.prototype.getValue() – returns the sum of money
--- Money.prototype.exchangeTo(currency) – returns the new Money object converted to the argumented currency
--- Money.prototype.add(money) – returns the new money object that adds up two money objects with convertation to one currency if different
--- Money.prototype.format() – returns the localized sum of money.
 */
const rates = {
  usd: { eur: 0.7 },
  eur: { usd: 1.2 },
};

function Money(value, currency = "usd") {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency) {
  const initCurrency = this.getCurrency();
  const initValue = this.getValue();
  const newValue =
    initCurrency === currency
      ? initValue
      : initValue * rates[initCurrency][currency];
  return new Money(newValue, currency);
};

Money.prototype.add = function add(money) {
  const resCurrency = this.getCurrency();
  let newMoney = money.exchangeTo(resCurrency);
  let sumValue = this.getValue() + newMoney.getValue();
  return new Money(sumValue, resCurrency);
};

Money.prototype.format = function format() {
  const curr = this.getCurrency();
  const val = this.getValue();
  return curr === "usd"
    ? val.toLocaleString("en-US", { style: "currency", currency: "USD" })
    : val.toLocaleString("en-EN", { style: "currency", currency: "EUR" });
};

///// TESTS
const money1 = new Money(100);
console.log(money1.exchangeTo("usd"));
// sum with no convertation
console.log(money1.getValue()); // 100
// sum with convertation
console.log(money1.exchangeTo("eur").getValue()); // 70

const money2 = new Money(200, "eur");
console.log(money2.getValue()); // 200

// addition with convertation to eur
const money3 = money2.add(money1);
console.log(money3.getValue()); // 270

// addition with convertation to usd
const money4 = money1.add(money2);
console.log(money4.getValue()); // 340

// formatting
console.log(money1.format()); // "$100.00"
console.log(money2.format()); // "€200.00"

const money5 = new Money(10000);
console.log(money5.format()); // "$10,000.00"

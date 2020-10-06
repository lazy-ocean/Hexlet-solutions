/* getTotalAmount.js
Write and export by default getTotalAmount() function that takes a money wallet as an array and returns the sum of argumented currency in that wallet.
Use break or continue.

Example:
getTotalAmount(['eur 10', 'usd 1', 'usd 10'], 'usd'); => 11
*/

const getTotalAmount = (arr, currency) => {
    if (arr.length === 0) return 0;
    let result = 0;
    for (const item of arr) {
        if (item.slice(0, 3) !== currency) continue;
        result += ~~item.slice(4);
    }
    return result;
};

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
console.log(getTotalAmount(money1, 'usd')); // 16
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
console.log(getTotalAmount(money2, 'eur')); // 135
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];
console.log(getTotalAmount(money3, 'rub')); // 270
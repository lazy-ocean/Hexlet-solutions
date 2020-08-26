/*reverse.js
Write a reverse function that reverse a string in the argument:

reverse('hello, world!'); // !dlrow ,olleh
*/

const reverse = (str) => {
    let i = str.length - 1;
    let result = '';

    while (i >= 0) {
        result = `${result}${str[i]}`;
        i--;
    }
    return result;
};

console.log(reverse('cat')); // 'tac'
console.log(reverse('tac')); // 'cat'
console.log(reverse('')); // ''
console.log(reverse('aaaa')); // 'aaaa'
console.log(reverse('Lorem ipsum dolor sit amet.')); //.tema tis rolod muspi meroL
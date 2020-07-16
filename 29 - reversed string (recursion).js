/*reverse.js
Using recursion, write and export by default a reverse() function that reverses a string in the argument:

reverse('hello, world!'); // !dlrow ,olleh
*/

const reverse = (str) => {
    if (str === '') return '';
    return reverse(str.slice(1)) + str[0];
    //or with interpolation:
    //return `${reverse(str.slice(1))}${str[0]}`;
};

export default reverse;

console.log(reverse('hello, world!')); // !dlrow ,olleh
console.log(reverse('Meow')); // woeM
console.log(reverse('Lorem ipsum dolor sit amet')); // tema tis rolod muspi meroL
console.log(reverse('')) // ''
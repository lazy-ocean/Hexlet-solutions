/* fizzBuzz.js
Write a fizzBuzz() function that takes two numbers and prints the range between it in the console. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
 */
const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i++) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;
        if (fizz && buzz) {
            console.log('FizzBuzz');
        } else if (fizz) {
            console.log('Fizz');
        } else if (buzz) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

export default fizzBuzz;

console.log(fizzBuzz(5, 15)) // Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 
console.log(fizzBuzz(25, 30)) // Buzz 26 Fizz 28 29 FizzBuzz
console.log(fizzBuzz()) // ...
console.log(fizzBuzz(15, 16)) // FizzBuzz 16
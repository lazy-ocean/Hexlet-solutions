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
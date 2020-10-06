/*
In computability theory, the Ackermann function, named after Wilhelm Ackermann, is one of the simplest and earliest-discovered examples of a total computable function that is not primitive recursive. All primitive recursive functions are total and computable, but the Ackermann function illustrates that not all total computable functions are primitive recursive. 

It’s a function with two arguments each of which can be assigned any non-negative integer.

Ackermann function is defined as:

          n+1                    if m = 0
A(m,n) =  A(m - 1, 1)            if m > 0, n = 0
          A(m - 1, A(m, n - 1))  if m > 0, n > 0;

m, n >= 0;

Write ackermann() function and export it by default.
*/

const ackermann = (m, n) => {
    if (m < 0 || n < 0) return undefined;
    if (m === 0) return n + 1;
    return (n === 0) ? ackermann(m - 1, 1) : ackermann(m - 1, ackermann(m, n - 1));
};

export default ackermann;

console.log(ackermann(0, 1)); // 2
console.log(ackermann(0, 0)); // 1
console.log(ackermann(1, 1)); // 3
console.log(ackermann(1, 2)); // 4
console.log(ackermann(2, 1)); // 5
console.log(ackermann(2, 3)); // 9
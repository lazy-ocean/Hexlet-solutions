/* diff.js
Write diff() function that takes two vectors (as angles in 360* square, integers from 0 to 360) and returns the min angle between them.

diff(0, 45) === 45;         // Not 315 (as in the whole 360*) but 45 as it is the lesser one
diff(0, 180) === 180;
diff(0, 190) === 170;       
diff(120, 280) === 160;
*/

const diff = (a, b) => {
    let result1 = Math.abs(a - b);
    let result2 = 360 - result1;
    return (result1 >= result2) ? result2 : result1;
}

console.log(diff(0, 0)); // 0
console.log(diff(0, 90)); // 90
console.log(diff(0, 180)); // 180
console.log(diff(0, 190)); // 170
console.log(diff(225, 0)); // 135
console.log(diff(0, 225)); // 135
console.log(diff(300, 45)); // 105
console.log(diff(45, 300)); // 105
console.log(diff(240, 300)); // 60
console.log(diff(120, 30)); // 90
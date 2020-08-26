/* formattedTime.js
Write and export by default formattedTime() function that takes the number of minutes passed from 00:00 and returns a time string - hh:mm. 
If more than 24 hours passed, return the number of hours passed from new midnight. 25 hours = 01:00.
*/
const formattedTime = (num) => {
    let mins = num % 60;
    let hours = Math.floor((num / 60) % 24);

    if (mins < 10) {
        mins = `0${mins}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }

    return `${hours}:${mins}`;
};

///////////////

const formattedTime = (num) => {
    let mins = num % 60;
    let hours = Math.floor((num / 60) % 24);

    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};


console.log(formattedTime(5)); // 00:05
console.log(formattedTime(15)); // 00:15
console.log(formattedTime(60)); // 01:00
console.log(formattedTime(67)); // 01:07
console.log(formattedTime(175)); // 02:55
console.log(formattedTime(600)); // 10:00
console.log(formattedTime(754)); // 12:34
console.log(formattedTime(1504)); // 01:04
console.log(formattedTime(549)); // 09:09
console.log(formattedTime(600)); // 10:00
console.log(formattedTime(1293)) // 21:33
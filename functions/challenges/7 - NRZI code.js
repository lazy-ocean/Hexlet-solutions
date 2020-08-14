/* nrzi.js
Write and export by default nrzi() function that takes a graphic representation of the signal and returns a binary code made out of it.
NRZI - Non-Return-to-Zero Inverted
https://en.wikipedia.org/wiki/Non-return-to-zero
*/
/////// OPTION 1 - FOR-LOOP
const nrzi = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "|") {
      result.push("0");
    } else if (str[i + 1]) {
      result.push("1");
      i++;
    }
  }
  return result.join("");
};

/////// OPTION 2 - MAP
const nrzi = (str) => {
  let arr = str.split("");
  let map = arr.map((item, i) => {
    if (arr[i] === "|") return "";
    return arr[i - 1] === "|" ? "1" : "0";
  });
  return map.join("");
};

/////// TESTS
const signal1 = "_|¯|____|¯|__|¯¯¯";
console.log(nrzi(signal1)); // '011000110100'

const signal2 = "|¯|___|¯¯¯¯¯|___|¯|_|¯";
console.log(nrzi(signal2)); // '110010000100111'

const signal3 = "¯|___|¯¯¯¯¯|___|¯|_|¯";
console.log(nrzi(signal3)); // '010010000100111'

const signal4 = "";
console.log(nrzi(signal4)); // ''

const signal5 = "|";
console.log(nrzi(signal5)); // ''

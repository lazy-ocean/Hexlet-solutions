/* toRoman-and-toArabic.js
Write toRoman() and toArabic() functions that will convert Roman and Arabic numbers.
*/
//////// ROMAN-ARABIC COMBINATIONS
const arToRom = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XV: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

///////// TO ROMAN OPTION 1
const toRoman = (num) => {
  let result = "";
  for (let key in arToRom) {
    let a = Math.floor(num / arToRom[key]);
    if (a >= 0) {
      for (let i = 0; i < a; i++) {
        result += key;
      }
    }
    num = num % arToRom[key];
  }
  return result;
};

///////// TO ROMAN OPTION 2
const toRoman = (num) => {
  let result = "";
  let values = Object.values(arToRom);
  for (let i = 0; i <= values.length; i++) {
    while (values[i] <= num) {
      result += Object.keys(arToRom)[i];
      num -= values[i];
    }
  }
  return result;
};

///////// TO ARABIC
const toArabic = (str) => {
  //// validating roman number using regular expressions
  if (
    str.search(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/) != 0
  )
    return false;
  let result = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let current = arToRom[str[i]];
    let previous = arToRom[str[i + 1]] || 0;
    current >= previous ? (result += current) : (result -= current);
  }
  return result;
};

///////// TESTS TO ARABIC
// FALSE ARABIC NUMBERS:
console.log(toArabic("IIII")); // false
console.log(toArabic("VX")); // false
// TRUE ARABIC NUMBERS:
console.log(toArabic("LIX")); // 59
console.log(toArabic("XXVII")); // 27
console.log(toArabic("XLVIII")); // 48
console.log(toArabic("XCIII")); // 93
console.log(toArabic("CXLI")); // 141
console.log(toArabic("CLXIII")); // 163
console.log(toArabic("CDII")); // 402
console.log(toArabic("DLXXV")); // 575
console.log(toArabic("CMXI")); // 911
console.log(toArabic("MXXIV")); // 1024
console.log(toArabic("MMM")); // 3000
console.log(toArabic("I")); // 1
console.log(toArabic("II")); // 2
console.log(toArabic("IV")); // 4
console.log(toArabic("V")); // 5
console.log(toArabic("VI")); // 6

///////// TESTS TO ROMAN
console.log(toRoman(1)); //  'I'
console.log(toRoman(2)); //  'II'
console.log(toRoman(4)); //  'IV'
console.log(toRoman(5)); //  'V'
console.log(toRoman(6)); //  'VI'
console.log(toRoman(27)); //  'XXVII'
console.log(toRoman(48)); //  'XLVIII'
console.log(toRoman(59)); //  'LIX'
console.log(toRoman(93)); //  'XCIII'
console.log(toRoman(141)); //  'CXLI'
console.log(toRoman(163)); //  'CLXIII'
console.log(toRoman(402)); //  'CDII'
console.log(toRoman(575)); //  'DLXXV'
console.log(toRoman(911)); //  'CMXI'
console.log(toRoman(1024)); //  'MXXIV'
console.log(toRoman(3000)); //  'MMM'

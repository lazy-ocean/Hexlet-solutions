/* ipToInt and intToIp
Write and export ipToInt() and intToIp() functions:
--- ipToInt(): takes a string ('192.0.0.112') and returns an integer
--- intToIp(): takes an integer and returns a string with IP.
*/

var _ = require("lodash");

//////// IP to integer
/// Splitting the string on decimal numbers and reversing it for the better work with indexes
/// Multiplying every number on 256 ** index and summing it all up to translate it to integer.
const ipToInt = (str) => {
  let arr = str.split(".").reverse();
  let map = arr.map((item, index) => item * Math.pow(256, index));
  return map.reduce((a, b) => a + b, 0);
};

//////// Integer to IP
/// Translating the number to octal, adding up zeros if missing
/// Chunking by 2 symbols each and translating to decimal, joining with dots to show an ip.
const intToIp = (num) => {
  let number = num.toString(16).padStart(8, 0);
  let chunks = _.chunk(number, 2);
  let map = chunks.map((chunk) => parseInt(chunk.join(""), 16));
  return map.join(".");
};

/////////// TESTS
console.log(intToIp(4294967295)); // '255.255.255.255'
console.log(intToIp(0)); // '0.0.0.0'
console.log(intToIp(32)); // '0.0.0.32'
console.log(intToIp(2149583361)); // '128.32.10.1'
console.log(intToIp(2154959208)); // '128.114.17.104'
console.log(intToIp(3221225584)); // '192.0.0.112'
console.log(intToIp(167801600)); // '10.0.115.0'

console.log(ipToInt("0.0.0.0")); // 0
console.log(ipToInt("255.255.255.255")); // 4294967295
console.log(ipToInt("0.0.0.32")); // 32
console.log(ipToInt("128.32.10.1")); // 2149583361
console.log(ipToInt("128.114.17.104")); // 2154959208
console.log(ipToInt("192.0.0.112")); // 3221225584
console.log(ipToInt("10.0.115.0")); // 167801600

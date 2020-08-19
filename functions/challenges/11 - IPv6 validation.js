var _ = require("lodash");

const isValidIPv6 = (str) => {
  let arr = str.split(":");
  if (!validateHex(arr)) return false;
  let colons = str.split(":").length - 1;

  let acc = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[0] === ":" && str[1] !== ":") return false;
    if (str[str.length - 1] === ":" && str[str.length - 2] !== ":")
      return false;
    if (str[i] === ":") {
      acc += 1;
      if (str[i - 1] === ":") {
        acc += 1;
        if (str[i - 2] === ":") return false;
      }
    }
    if (acc > 7 || acc > arr.length) return false;
  }
  return acc === 0 ? false : true;
};

const validateHex = (arr) => {
  for (let number of arr) {
    if (number.length) {
      if (number.length > 4) return false;
      let num = number.padStart(4, "0");
      if (isNaN(Number("0x" + num))) return false;
    }
  }
  return true;
};

////////// TESTS
///// VALID IPS
console.log(isValidIPv6("2a03:2880:2130:cf05:face:b00c:0:1"));
console.log(isValidIPv6("::b36:3c:f0:7:937"));
console.log(isValidIPv6("000::B36:3C:00F0:7:937"));
console.log(isValidIPv6("0B0:0F09:7f05:e2F3:0D:0:e0:7000"));
console.log(isValidIPv6("10:d3:2d06:24:400c:5ee0:be:3d"));
console.log(isValidIPv6("::"));
console.log(isValidIPv6("::1"));
console.log(isValidIPv6("1::1"));
console.log(isValidIPv6("2a02:cb41:0:0:0:0:0:7"));
console.log(isValidIPv6("e:6c::647:50:0:7"));
console.log(isValidIPv6("04:07A1:1404:0A0:A:080F:080:0"));

///// INVALID IPS
console.log(isValidIPv6("2607:G8B0:4010:801::1004"));
console.log(isValidIPv6("2001::0:64::2"));
console.log(isValidIPv6("2001"));
console.log(isValidIPv6("2001:::"));
console.log(isValidIPv6("2.001::"));
console.log(isValidIPv6("9f8:0:69S0:9:9:d9a:672:f90d"));
console.log(isValidIPv6("1001:208:67:4f00:e3::2c6:0"));
console.log(isValidIPv6("e1b6:1daf9:6:0:c50:8c4:90e:e"));
console.log(isValidIPv6("C00D::a2195:2EA9:096"));
console.log(isValidIPv6("d:0:4:a004:3b96:10b0:10:800:15"));
console.log(isValidIPv6("5c03:0:a::b825:d690:4ce0:2831:acf0"));
console.log(isValidIPv6(":1::1"));
console.log(isValidIPv6("1::1:"));
console.log(isValidIPv6("2a02:0cb41:0:0:0:0:0:7"));

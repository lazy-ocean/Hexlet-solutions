/* json.js
Write and export try-catch parseJson() function for the function JSON.parse(). If the string is not JSON, function should throw ParseError, which is already implemented.
 */

///// ParseError
class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

///// Try-catch
export const parseJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    throw new ParseError("Invalid JSON string");
  }
  return JSON.parse(str);
};

/////// TESTS
const json = '{ "key": "value" }';
console.log(parseJson(json)); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
console.log(parseJson(incorrectJson)); // => ParseError: Invalid JSON string

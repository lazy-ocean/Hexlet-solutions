/* urlClass.js
Using node.js url library write own Url class that contains:
--- constructor that takes http-string;
--- getScheme() method - returns protocol without ':'
--- getHostName() method - returns host name
--- getQueryParams() method - returns query params as an object {key: value, key1: value1 ...}
--- getQueryParam(key) method - returns a value of the argumented key of the query parameters;
 */
const url = require("url");

class Url {
  constructor(http) {
    const data = new URL(http);
    this.protocol = data.protocol;
    this.host = data.hostname;
    this.queryParams = data.searchParams;
  }
  getScheme() {
    return this.protocol;
  }
  getHostName() {
    return this.host;
  }
  getQueryParams() {
    let result = {};
    this.queryParams.forEach((value, name) => {
      result[name] = value;
    });
    return result;
  }
  getQueryParam(query, defaultValue = null) {
    let params = this.getQueryParams();
    return params[query] || defaultValue;
  }
}

/////// TESTS
const url1 = new Url("http://yandex.ru?key=value&key2=value2");

console.log(url1.getScheme()); // 'http'
console.log(url1.getHostName()); // 'yandex.ru'
console.log(url1.getQueryParams()); // { key: 'value', key2: 'value2' }
console.log(url1.getQueryParam("key")); // 'value'
console.log(url1.getQueryParam("key2", "lala")); // 'value2'
console.log(url1.getQueryParam("new", "ehu")); // 'ehu'

const url2 = new Url("https://google.com:80?a=b&c=d&lala=value");

console.log(url2.getScheme()); // 'https'
console.log(url2.getHostName()); // 'google.com'
console.log(url2.getQueryParams()); // { a: 'b', c: 'd', lala: 'value' };
console.log(url2.getQueryParam("key")); // null

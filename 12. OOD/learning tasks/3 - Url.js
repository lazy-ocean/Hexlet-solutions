/* urlClass.js
Using node.js url library write own Url class that contains:
--- constructor that takes http-string;
--- getScheme() method - returns protocol without ':'
--- getHostName() method - returns host name
--- getQueryParams() method - returns query params as an object {key: value, key1: value1 ...}
--- getQueryParam(key) method - returns a value of the argumented key of the query parameters;
--- equals(url) - takes another Url class object and returns if they are equal with the current Url.
 */

const url = require("url");

class Url {
  constructor(http) {
    this.data = new URL(http);
  }
  getScheme() {
    return this.data.protocol.slice(0, -1);
  }
  getHostName() {
    return this.data.hostname;
  }
  getQueryParams() {
    let queries = this.data.searchParams;
    let res = {};
    queries.forEach((value, key) => (res[key] = value));
    return res;
  }
  getQueryParam(key, value = null) {
    let queries = this.getQueryParams();
    return queries[key] || value;
  }
  equals(othUrl) {
    return othUrl.data.href === this.data.href;
  }
}

//////// TESTS
const myurl = new Url("http://yandex.ru:80?key=value&key2=value2");
console.log(myurl.getScheme()); // http
console.log(myurl.getQueryParams()); // { key: 'value', key2: 'value2' }
console.log(myurl.getQueryParam("key")); // value
console.log(myurl.getQueryParam("key2", "lala")); // value2
console.log(myurl.getQueryParam("new", "ehu")); // ehu
console.log(myurl.getQueryParam("new")); // null
console.log(myurl.equals(new Url("http://yandex.ru:80?key=value&key2=value2"))); // true
console.log(myurl.equals(new Url("http://yandex.ru:80?key=value"))); // false

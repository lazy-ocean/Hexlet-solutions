/* url.js
Using node.js url library write a series of functions to work with URLs:
--- make(url) - make URL
--- setProtocol(data, protocol) - setter: set a new protocol
--- getProtocol(data) - getter: return protocol
--- setHost(data, host) - setter: change host
--- getHost(data) - getter: return host
--- setPath(data, path) - setter: change path
--- getPath(data) - getter: return path
--- setQueryParam(data, key, value) - setter: changes or sets the new value for the search parameter
--- getQueryParam(data, paramName, default = null) - getter: returns the value for the argumented search key or, if there's no such key, default.
--- toString(data) - getter: returns href;
 */
const url = require("url");

const make = (str) => new URL(str);
const toString = (data) => data.href;

const getProtocol = (data) => data.protocol;
const setProtocol = (data, protocol) => (data.protocol = protocol);

const getHost = (data) => data.host;
const setHost = (data, host) => (data.host = host);

const getPath = (data) => data.pathname;
const setPath = (data, path) => (data.pathname = path);

const getQueryParam = (data, paramName, defaultValue = null) =>
  data.searchParams.get(paramName) || defaultValue;
const setQueryParam = (data, key, value) => data.searchParams.set(key, value);

export {
  make,
  getProtocol,
  getHost,
  getPath,
  setProtocol,
  setHost,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
};

////// TESTS

const workUrl = make("https://hexlet.io/community?q=low");
setProtocol(workUrl, "http:");
console.log(toString(workUrl)); // 'http://hexlet.io/community?q=low'

setPath(workUrl, "/404");
console.log(toString(workUrl)); // 'http://hexlet.io/404?q=low'

setQueryParam(workUrl, "page", 5);
console.log(toString(workUrl)); // 'http://hexlet.io/404?q=low&page=5'

setQueryParam(workUrl, "q", "high");
console.log(toString(workUrl)); // 'http://hexlet.io/404?q=high&page=5'

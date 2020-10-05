/* wait.js
Promisify asynchronous setTimeout() method */
export const wait = (timer) =>
  new Promise((resolve) => setTimeout(resolve, timer));

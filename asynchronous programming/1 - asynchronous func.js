/* printer.js
Write and export by default asynchronous print() function that reads the file data using fs method and prints it to the console.
Nevermind error parameter for now.
*/
const print = (file) =>
  fs.readFile(file, "utf-8", (_error, data) => console.log(data));

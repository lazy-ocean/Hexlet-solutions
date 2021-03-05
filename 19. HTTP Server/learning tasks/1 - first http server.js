/* httpServer.js
Realize a HTTP server that is an interface for a phonebook.
Phonebook data is a txt file in the same folder as your server config file.
When getting '/' server should answer with the following body:
    Welcome to The Phonebook
    Records count: <number of lines in the phonebook>
*/
import fs from "fs/promises";
import http from "http";

const port = 8080;
const data = await fs.readFile("phonebook.txt", "utf8");
const lines = data.trim().split("\n").length;
const server = http.createServer((request, response) => {
  response.write(`Welcome to The Phonebook\nRecords count: ${lines}`);
  response.end();
});
server.listen(port, () => {
  console.log("server started!");
});

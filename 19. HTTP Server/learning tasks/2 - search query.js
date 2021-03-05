/*
1) Phonebook txt items looks like this: "2 | Miss Ewald Dickinson | 699-653-9379"
Add logic to parse it to this object:
{
  <id>: {
    name: <name>,
    phone: <phone>,
  },
  ...
}

2) Add logic for searching: server request to "localhost:8080/search?q=mrs" should return all entries containing this substring. Search case insensitive!
*/

import fs from "fs/promises";
import http from "http";

const port = 8080;

const makeServer = (usersById) =>
  http.createServer((request, response) => {
    request.on("end", () => {
      if (request.url === "/") {
        const messages = [
          "Welcome to The Phonebook",
          `Records count: ${Object.keys(usersById).length}`,
        ];
        response.end(messages.join("\n"));
      } else if (request.url.startsWith("/search")) {
        const url = new URL(request.url, `http://${request.headers.host}`);
        const query = url.searchParams.get("q");
        let responseTxt;
        if (query) {
          responseTxt =
            Object.values(usersById)
              .filter((user) =>
                user.name.toLowerCase().includes(query.toLowerCase())
              )
              .map(({ name, phone }) => `${name}, ${phone}`)
              .join("\n") || "";
        } else responseTxt = "";
        response.end(responseTxt);
      }
    });
    request.resume();
  });

const data = await fs.readFile("phonebook.txt", "utf-8");

const dataArray = data.trim().split("\n");
const usersById = dataArray.reduce((acc, user) => {
  const userData = user.split(" | ");
  const [id, name, phone] = userData;
  acc[id] = { name: name, phone: phone };
  return acc;
}, {});

const server = makeServer(usersById);
server.listen(port, () => {});

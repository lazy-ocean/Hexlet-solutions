/* routing.js
Complete the routing '/users/(\\w+).json' that return entry from the phonebook by that index.
Return data as json, or, if it is incorrect or missing, return 404 and empty body.
*/

import http from "http";

const getParams = (address, host) => {
  const url = new URL(address, `http://${host}`);
  return Object.fromEntries(url.searchParams);
};

const router = {
  GET: {
    "/users/(\\w+).json": (req, res, matches, usersById) => {
      ////////////////// SOLUTION /////////////////////////////
      const index = matches[1];
      const user = usersById[index];
      if (user) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ data: user }));
      } else {
        res.statusCode = 404;
        res.end();
      }
      ////////////////////////////////////////////////////////
    },
    "/": (req, res, matches, usersById) => {
      const messages = [
        "Welcome to The Phonebook",
        `Records count: ${Object.keys(usersById).length}`,
      ];
      res.end(messages.join("\n"));
    },

    "/search.json": (req, res, matches, usersById) => {
      res.setHeader("Content-Type", "application/json");

      const { q = "" } = getParams(req.url, req.headers.host);
      const normalizedSearch = q.trim().toLowerCase();
      const ids = Object.keys(usersById);

      const usersSubset = ids
        .filter((id) =>
          usersById[id].name.toLowerCase().includes(normalizedSearch)
        )
        .map((id) => usersById[id]);
      res.end(JSON.stringify({ data: usersSubset }));
    },

    "/users.json": (req, res, matches, usersById) => {
      res.setHeader("Content-Type", "application/json");

      const { page = 1, perPage = 10 } = getParams(req.url, req.headers.host);
      const ids = Object.keys(usersById);

      const usersSubset = ids
        .slice(page * perPage - perPage, page * perPage)
        .map((id) => usersById[id]);
      const totalPages = Math.ceil(ids.length / perPage);
      res.end(
        JSON.stringify({
          meta: { page, perPage, totalPages },
          data: usersSubset,
        })
      );
    },
  },
};

const makeServer = (users) =>
  http.createServer((request, response) => {
    const { pathname } = new URL(request.url, `http://${request.headers.host}`);
    const routes = router[request.method];
    const result =
      pathname &&
      Object.keys(routes).find((str) => {
        const regexp = new RegExp(`^${str}$`);
        const matches = pathname.match(regexp);
        console.log(matches);
        if (!matches) {
          return false;
        }

        routes[str](request, response, matches, users);
        return true;
      });

    if (!result) {
      response.writeHead(404);
      response.end();
    }
  });

const data = await fs.readFile("phonebook.txt");
const users = data
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split("|").map((item) => item.trim()));
const usersIds = users.map(([id]) => id);
const usersData = users.map(([, name, phone]) => ({ name, phone }));
const usersById = _.zipObject(usersIds, usersData);

const server = makeServer(usersById);
server.listen(port, callback.bind(null, server));

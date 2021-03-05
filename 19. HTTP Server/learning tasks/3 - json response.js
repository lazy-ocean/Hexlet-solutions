/* jsonResponse.js
In addition to the logic written in the previous task, add it up with request on "localhost:8080/users.json?page=2&perPage=3": this way, this json should be returned:
{
  "meta": { "page": 5, "perPage": 2, "totalPages": 500  },
  "data": [
    { "name": "Mrs. Marlee Lesch", "phone": "(412) 979-7311" },
    { "name": "Mrs. Mabelle Cormier", "phone": "307.095.4754" }
  ]
}

default page = 1
default pages = 10
*/

//...
if (request.url.startsWith("/users.json")) {
  response.setHeader("Content-Type", "application/json");
  const url = new URL(request.url, `http://${request.headers.host}`);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const perPage = parseInt(url.searchParams.get("perPage")) || 10;
  const data =
    page !== 1
      ? Object.values(usersById).slice(page * perPage - perPage, page * perPage)
      : Object.values(usersById).slice(0, perPage);
  const result = {
    meta: {
      page,
      perPage,
      totalPages: Math.ceil(Object.keys(usersById).length / perPage),
    },
    data,
  };
  response.end(JSON.stringify(result));
}
//...

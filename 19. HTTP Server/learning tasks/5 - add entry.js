/* addEntry.js
Complete logic for adding and validating a new entry.
Entry based on POST request with this body: '{"name":"Bob","phone":"912-114-23-22"}'

If entry is successfully added, return 201 with the body:
{
  "meta": {
    "location": "/users/10.json"
  },
  "data": {
    "name": "Bob",
    "phone": "912-114-23-22",
    "id": 10
  }
}

In case of any error, return 422 and this body:
{
  "errors": [
    {
      "source": "name",
      "title" :"bad format"
    },
    {
      "source": "phone",
      "title" :"can't be blank"
    }
  ]
}
*/

////////// ROUTING:
const router = {
  ...previousRoutes,
  POST: {
    "/users.json": (req, res, matches, body, usersById) => {
      const data = JSON.parse(body);
      const errors = validate(data);
      res.setHeader("Content-Type", "application/json");
      if (errors.length) {
        res.writeHead(422);
        res.end(JSON.stringify({ errors }));
      } else {
        const id = nextId();
        usersById[id] = data;
        res.writeHead(201);
        res.end(
          JSON.stringify({
            meta: {
              location: `/users/${id}.json`,
            },
            data: { ...data, id },
          })
        );
      }
    },
  },
};

///////// VALIDATION:
let id = 1000;
const nextId = () => {
  id += 1;
  return id;
};

const validate = ({ name, phone }) => {
  let errors = [];
  if (!name) errors.push({ source: "name", title: "can't be blank" });
  if (!phone) errors.push({ source: "phone", title: "can't be blank" });
  if (!/^[\w\.]+$/.test(name))
    errors.push({ source: "name", title: "bad format" });
  return errors;
};

/* counter.js
Write a server for a simple counter:
--- '/': get current counter value as json: { 'value': 0 } (0 is a default value)
--- POST '/increment': increment a counter by one
--- POST '/decrement': decrement a counter by one
--- DELETE '/reset': set counter to a default value
--- PUT '/set?value=5': set counter to a value posted as a 'value' query.
All routes except '/' should return '204 no context'.
*/
import Express from "express";

const server = () => {
  const app = new Express();
  let counter = 0;
  app.get("/", (req, res) => {
    res.json({ value: counter });
  });
  app.post("/increment", (req, res) => {
    counter += 1;
    res.status(204).end();
  });
  app.post("/decrement", (req, res) => {
    counter -= 1;
    res.status(204).end();
  });
  app.delete("/reset", (req, res) => {
    counter = 0;
    res.status(204).end();
  });
  app.put("/set", (req, res) => {
    const { value } = req.query;
    counter = parseInt(value, 10);
    res.status(204).end();
  });
  return app;
};

const port = 8080;
server().listen(port, () => {
  console.log(`Server was started on '${port}'`);
});

/* blogApp.js
Add deleting and editing functionality to the same app.

/////////////////////////////////////////
//////////// SERVER FILES //////////////
/////////////////////////////////////////

/*
1) Post.js - a class for a new post. has id, title and body properties.
*/
let id = 1;

export default class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    id += 1;
    this.id = id;
  }
}

/*
2) app.js - server implementation
*/
import Express from "express";
import bodyParser from "body-parser";

import Post from "./entities/Post.js";

export default () => {
  const app = new Express();
  app.set("view engine", "pug");
  app.use("/assets", Express.static(process.env.NODE_PATH.split(":")[0]));
  app.use(bodyParser.urlencoded({ extended: false }));

  const posts = [
    new Post("hello", "how are you?"),
    new Post("nodejs", "story about nodejs"),
  ];

  app.get("/", (req, res) => {
    res.render("index");
  });

  app.post("/posts", (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
      return res.status(422).end();
    } else {
      const newPost = new Post(title, body);
      posts.push(newPost);
      res.redirect(`/posts/${newPost.id}`);
    }
  });
  app.get("/posts", (req, res) => {
    res.render("posts/index", { posts });
  });
  app.get("/posts/new", (req, res) => {
    res.render("posts/new");
  });
  app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find((post) => post["id"] === ~~id);
    res.render("posts/show", post);
  });

  ////////////////////////////////////
  ////////////////////////// NEW LOGIC
  app.get("/posts/:id/edit", (req, res) => {
    const post = posts.find((p) => p.id.toString() === req.params.id);
    res.render("posts/edit", { form: post, errors: {} });
  });

  app.patch("/posts/:id", (req, res) => {
    const { title, body } = req.body;
    const errors = {};
    if (!title) errors.title = "Title can't be blank";
    if (!body) errors.body = "Body can't be blank";

    if (Object.keys(errors).length === 0) {
      const post = new Post(title, body);
      posts = posts.map((p) => (p.id.toString() === req.params.id ? post : p));
      res.redirect(`/posts/${post.id}`);
      return;
    }
    res.status(422);
    res.render("posts/new", { form: req.body, errors });
  });
  app.delete("/posts/:id", (req, res) => {
    posts = posts.filter((p) => p.id.toString() !== req.params.id);
    res.redirect(`/posts`);
  });
  ////////////////////////////////////
  ///////////////////////////////////
  return app;
};

/*
3) server.js - server start
*/
import server from "../app.js";

const port = 8080;
server().listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server was started on '${port}'`);
});

/* blogApp.js
Write an app that allows user to blog. Use Pug to render new pages.
App server methods:
--- GET /posts - show page with all posts
--- GET /posts/:id - show particular post
--- GET /posts/new - show a form for submitting a new post
--- POST /posts - new post adding. If successful, redirect to the /post/:id page, otherwise return 422 status.

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

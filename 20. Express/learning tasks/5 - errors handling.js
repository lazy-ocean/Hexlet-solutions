/* errorsMiddleware.js
Add error handling logic and middlewares to the app. 
*/
() => {
  const app = new Express();
  app.set("view engine", "pug");

  const posts = [
    new Post("hello", "how are you?"),
    new Post("nodejs", "story about nodejs"),
  ];

  app.get("/", (_req, res) => {
    res.render("index", { posts });
  });

  app.get("/posts/:id", (req, res, next) => {
    const post = posts.find((p) => p.id.toString() === req.params.id);
    if (post) {
      res.render("posts/show", { post });
    } else {
      // HANDLING ERROR IF NO SUCH POST
      next(new NotFoundError());
    }
  });

  // DEFAULT ERROR MIDDLEWARES
  app.use((_req, _res, next) => {
    next(new NotFoundError());
  });

  app.use((err, _req, res, next) => {
    res.status(err.status);
    switch (err.status) {
      case 404:
        res.render(err.status.toString());
        break;
      default:
        next(new Error("Unexpected error"));
    }
  });

  return app;
};

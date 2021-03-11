/* signInAndSession.js
Write a full interface with:
--- sigining in option: for existing users
--- signing up option: for new users

Keep user info in storage.
You will need to add:
--- GET /users/new — new users creation form
POST /users — new user addition: validate nickname and password (should not be empty - both - or not unique - nickname). If user is successfully added, rediredt to the main page, otherwise 422 and show form with all errors.
GET /session/new — signing in form
POST /session — authentification. Validate entered data with the list of existing users. If everything is ok, redirect to the main page, otherwise show the form with the "Invalid nickname or password" message and 422 status code.
DELETE /session — session deletion, afterwards redirect to the main page.
*/

///////// USER
class User {
  constructor(nickname, password) {
    this.nickname = nickname;
    this.password = password;
  }
  isGuest() {
    return false;
  }
}

//////// GUEST
class Guest {
  constructor() {
    this.guest = true;
  }

  isGuest() {
    return this.guest;
  }
}

/////// SERVER
import Express from "express";
import session from "express-session";
import morgan from "morgan";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import crypto from "crypto";

const crypto = (text) => {
  const hash = crypto.createHmac("sha512", "salt");
  hash.update(text);
  return hash.digest("hex");
};

const server = () => {
  const app = new Express();
  app.use(morgan("combined"));
  app.use(methodOverride("_method"));
  app.set("view engine", "pug");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/assets", Express.static(process.env.NODE_PATH.split(":")[0]));
  app.use(
    session({
      secret: "secret key",
      resave: false,
      saveUninitialized: false,
    })
  );

  const users = [new User("admin", encrypt("qwerty"))];

  app.use((req, res, next) => {
    if (req.session?.nickname) {
      const { nickname } = req.session;
      res.locals.currentUser = users.find((user) => user.nickname === nickname);
    } else {
      res.locals.currentUser = new Guest();
    }
    next();
  });

  app.get("/", (_req, res) => {
    res.render("index");
  });

  app.get("/users/new", (req, res) => {
    res.render("users/new", { form: {}, errors: {} });
  });
  app.get("/session/new", (req, res) => {
    res.render("session/new", { form: {}, errors: "" });
  });
  app.post("/users", (req, res) => {
    const errors = {};
    const { nickname, password } = req.body;
    if (!nickname) {
      errors.nickname = "Nickname can't be blank";
    } else {
      const isUniq = !users.some((user) => user.nickname === nickname);
      if (!isUniq) {
        errors.nickname = "This nickname is already taken";
      }
    }
    if (!password) errors.password = "Password can't be blank";
    if (Object.keys(errors).length > 0) {
      res.status(422);
      res.render("users/new", { form: req.body, errors });
      return;
    }
    const newUser = new User(nickname, encrypt(password));
    users.push(newUser);
    res.redirect("/");
  });
  app.post("/session", (req, res) => {
    const { nickname, password } = req.body;
    let user = users.find((u) => u.nickname === nickname);
    if (!user || user.password !== encrypt(password)) {
      res.status(422);
      res.render("session/new", {
        form: req.body,
        errors: "Invalid nickname or password",
      });
      return;
    }
    req.session.nickname = nickname;
    res.redirect("/");
  });
  app.delete("/session", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/");
    });
  });

  return app;
};

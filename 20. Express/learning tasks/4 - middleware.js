/* userAgentMiddleware.js
Write a middleware that adds useragent property to the request. The value os useragent property should be an object that is a result of ua-parser-js library parsing.
*/
import UAParser from "ua-parser-js";

app.use((req, res, next) => {
  const userAgent = UAParser(req.headers["user-agent"]);
  req.useragent = userAgent;
  next();
});

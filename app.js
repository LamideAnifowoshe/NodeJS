// const http = require("http");
const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("in another middleware handling /users path!");
  res.send("<h1>Hello from HTML!</h1>");
  // next()
});

app.use("/", (req, res, next) => {
  console.log("/ middleware");
  //   next();
  res.send("<p>in the middleware handling just / path!</p>");
});

// const server = http.createServer(app);

app.listen(3000);

// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./Routes/admin");
const shop = require("./Routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(admin);
app.use(shop);

// app.use("/users", (req, res, next) => {
//   console.log("in another middleware handling /users path!");
//   res.send("<h1>Hello from HTML!</h1>");
//   // next()
// });

// const server = http.createServer(app);

app.listen(8000);

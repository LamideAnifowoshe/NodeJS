const path = require("path");
// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const shop = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(admin.routes);
app.use(shop);

// app.use("/users", (req, res, next) => {
//   console.log("in another middleware handling /users path!");
//   res.send("<h1>Hello from HTML!</h1>");
//   // next()
// });

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// const server = http.createServer(app);

app.listen(8000);

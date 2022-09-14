const path = require("path");
// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const shop = require("./routes/shop");
const errorController = require("./controllers/error");
// const expressHbs = require("express-handlebars");
const sequelize = require("./util/database");

const app = express();

// app.engine("handlebars", expressHbs());
// app.set("view engine", "handlebars");

// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", admin);
app.use(shop);

// app.use("/users", (req, res, next) => {
//   console.log("in another middleware handling /users path!");
//   res.send("<h1>Hello from HTML!</h1>");
//   // next()
// });

app.use(errorController.get404);

// const server = http.createServer(app);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });

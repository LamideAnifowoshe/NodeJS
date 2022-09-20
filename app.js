const path = require("path");
// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const shop = require("./routes/shop");
const errorController = require("./controllers/error");
// const expressHbs = require("express-handlebars");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const app = express();

// app.engine("handlebars", expressHbs());
// app.set("view engine", "handlebars");

// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", admin);
app.use(shop);

// app.use("/users", (req, res, next) => {
//   console.log("in another middleware handling /users path!");
//   res.send("<h1>Hello from HTML!</h1>");
//   // next()
// });

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
Product.belongsTo(Cart, { through: CartItem });
Cart.belongsTo(Product, { through: CartItem });
Cart.belongsTo(User);
User.belongsTo(Cart);

// const server = http.createServer(app);

sequelize
  .sync()
  //   .sync({ force: true })
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "lammy", email: "lammy@yahoo.com" });
    }
    return user;
    // console.log(result);
  })
  .then((user) => {
    return user.createCart();
    //   console.log(user);
  })
  .then((cart) => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const errorController = require("./controllers/error");
const mongoConnect = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("637fb3f400d72eb58ac892f2")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://mainuser:Amazing01.@clusterexpress.ielab8o.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Lammy",
          email: "anifowosheolamidee@yahoo.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });

    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// mongoConnect(() => {});
// app.listen(3000);

// const path = require("path");

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoConnect = require("./util/database");

// const errorController = require("./controllers/error");
// // const sequelize = require("./util/database");
// // const Product = require("./models/product");
// // const User = require("./models/user");
// // const Cart = require("./models/cart");
// // const CartItem = require("./models/cart-item");
// // const Order = require("./models/order");
// // const OrderItem = require("./models/order-item");

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// // const adminRoutes = require("./routes/admin");
// // const shopRoutes = require("./routes/shop");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

// // app.use("/admin", adminRoutes);
// // app.use(shopRoutes);

// app.use(errorController.get404);

// mongoConnect((client) => {
//     console.log(client)
//   app.listen(8000);
// });

// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// sequelize
//   //   .sync({ force: true })
//   .sync()
//   .then((result) => {
//     return User.findByPk(1);
//     // console.log(result);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "Max", email: "test@test.com" });
//     }
//     return user;
//   })
//   .then((user) => {
//     // console.log(user);
//     return user.createCart();
//   })
//   .then((cart) => {
//     app.listen(8000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

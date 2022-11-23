const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// const mongodb = require("mongodb");
// const getDb = require("../util/database");

// class Product {
//   constructor(title, price, description, imageUrl, id) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//   }

//   async save() {
//     const db = await getDb();
//     let dbOp;
//     if (this._id) {
//       // Update the product
//       dbOp = db.products.updateOne({ name: this.name }, { $set: this });
//     } else {
//       dbOp = db.collection("products").insertOne({
//         title: this.title,
//         price: this.price,
//         description: this.description,
//         imageUrl: this.imageUrl,
//       });
//     }
//     return dbOp
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   async fetchAll() {
//     const db = await getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   // return dbOp
//   // .collection("products")

//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find({ _id: new mongodb.ObjectId(prodId) })
//       .next()
//       .then((product) => {
//         console.log(product);
//         return product;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static deletebyId(prodId) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .deleteOne({ _id: new mongodb.ObjectId(prodId) })
//       .then((result) => {
//         console.log("deleted");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// module.exports = Product;

// // const Sequelize = require("sequelize");

// // const sequelize = require("../util/database");

// // const Product = sequelize.define("product", {
// //   id: {
// //     type: Sequelize.INTEGER,
// //     autoIncrement: true,
// //     allowNull: false,
// //     primaryKey: true,
// //   },
// //   title: Sequelize.STRING,
// //   price: {
// //     type: Sequelize.DOUBLE,
// //     allowNull: false,
// //   },
// //   imageUrl: {
// //     type: Sequelize.STRING,
// //     allowNull: false,
// //   },
// //   description: {
// //     type: Sequelize.STRING,
// //     allowNull: false,
// //   },
// // });

// // module.exports = Product;

// // const e = require("express");
// // const fs = require("fs");
// // const path = require("path");
// // const Cart = require("./cart");
// // const db = require("../util/database");

// // const p = path.join(
// //   path.dirname(require.main.filename),
// //   "data",
// //   "products.json"
// // );

// // const getProductsFromFile = (cb) => {
// //   fs.readFile(p, (error, fileContent) => {
// //     try {
// //       cb(JSON.parse(fileContent));
// //     } catch (error) {
// //       console.log(error);
// //       cb([]);
// //     }
// //   });
// // };
// // module.exports = class Product {
// //   constructor(id, title, imageUrl, description, price) {
// //     this.id = id;
// //     this.title = title;
// //     this.imageUrl = imageUrl;
// //     this.description = description;
// //     this.price = price;
// //   }

// //   save() {
// //     // getProductsFromFile((products) => {
// //     //   if (this.id) {
// //     //     const existingProductIndex = products.findIndex(
// //     //       (prod) => prod.id === this.id
// //     //     );
// //     //     const updatedProducts = [...products];
// //     //     updatedProducts[existingProductIndex] = this;
// //     //     fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
// //     //       console.log(err);
// //     //     });
// //     //   } else {
// //     //     this.id = Math.random().toString();
// //     //     products.push(this);
// //     //     fs.writeFile(p, JSON.stringify(products), (err) => {
// //     //       console.log(err);
// //     //     });
// //     //   }
// //     // });
// //     return db.execute(
// //       "INSERT INTO PRODUCTS(title, price, imageUrl, description) VALUES(?,?,?,?)",
// //       [this.title, this.price, this.imageUrl, this.description]
// //     );
// //   }

// //   static deleteById(id) {
// //     // getProductsFromFile((products) => {
// //     //   const product = products.find((prod) => prod.id === id);
// //     //   const updatedProducts = products.filter((prod) => prod.id !== product.id);
// //     //   fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
// //     //     console.log(err);
// //     //     if (!err) {
// //     //       Cart.deleteProduct(id, product.price);
// //     //     }
// //     //   });
// //     // });
// //   }

// //   static fetchAll() {
// //     return db.execute("SELECT * from PRODUCTS");

// //     // getProductsFromFile(cb);
// //   }

// //   static findById(id, cb) {
// //     return db.execute("SELECT * FROM products WHERE products.id=?", [id]);
// //     // getProductsFromFile((products) => {
// //     //   const product = products.find((p) => p.id === id);
// //     //   cb(product);
// //     // });
// //   }
// // };

const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      try {
        products = JSON.parse(fileContent);
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      } catch (error) {
        console.log(error);
      }
      //   if (!err) {
      //   }
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (error, fileContent) => {
      try {
        cb(JSON.parse(fileContent));
      } catch (error) {
        console.log(error);
        cb([]);
      }
      //   if (err) {

      //   } else {
      //   }
    });
  }
};

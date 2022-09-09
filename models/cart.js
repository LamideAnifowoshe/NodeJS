const fs = require("fs");
const path = require("path");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //  fetch the previous cart
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "cart.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      try {
        if (!err) {
          cart = JSON.parse(fileContent);
        }
        //   products.push(this);
        const existingProductIndex = cart.products.findIndex(
          (prod) => prod.id === id
        );
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        if (existingProduct) {
          updatedProduct = { ...existingProduct };
          updatedProduct.qty = updatedProduct.qty + 1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex] = updatedProduct;
        } else {
          updatedProduct = { id: id, qty: 1 };
          cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;

        fs.writeFile(p, JSON.stringify(cart), (err) => {
          console.log(err);
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
};

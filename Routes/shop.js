const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
const admin = require("./admin");

router.get("/", (req, res, next) => {
  // console.log(admin.products);
  const product = admin.products;
  //   next();
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { prods: admin.products, docTitle: "Shop" });
});

module.exports = router;

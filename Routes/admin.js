const path = require("path");
const express = require("express");
const router = express.Router();
// const rootDir = require("../util/path");
const productsController = require("../controller/products");

router.get("/add-product", productsController.getAddProducts);

router.post("/add-product", productsController.postNewProducts);

module.exports = router;

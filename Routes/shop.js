const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
const admin = require("./admin");
const productsController = require("../controller/products");

router.get("/", productsController.getProducts);

module.exports = router;

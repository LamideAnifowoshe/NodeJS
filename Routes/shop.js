const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("/ middleware");
  //   next();
  res.send("<p>in the middleware handling just / path!</p>");
});

module.exports = router;

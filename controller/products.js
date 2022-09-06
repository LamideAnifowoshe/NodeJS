const products = [];

exports.getAddProducts = (req, res, next) => {
  //   console.log("/add-product middleware");
  //   next();
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
  });
};

exports.postNewProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

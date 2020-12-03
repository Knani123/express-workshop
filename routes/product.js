const express = require("express");
const route = express.Router();
const product = require("../database/databaseproduct");
const sayHello = require("../midlewares/midleware");

//get all cars
route.get("/product", (req, res) => {
  res.send({ product: product });
});
module.exports = route;

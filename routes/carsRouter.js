const express = require("express");
const route = express.Router();
const cars = require("../database/databasecars");
const sayHello = require("../midlewares/midleware");

//get all cars
route.get("/cars", (req, res) => {
  res.send({ Allcars: cars });
});
module.exports = route;

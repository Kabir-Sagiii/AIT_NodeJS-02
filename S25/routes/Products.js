const express = require("express");
const route = express.Router();
const connection = require("../utils/MongodbConnect");
let collection;
route.get(
  "/getproducts",
  async (req, res, next) => {
    collection = await connection("products");
    if (collection) {
      next();
    } else {
      res.send({
        ok: false,
        result: "Failed to connect with database",
      });
    }
  },
  async (req, res) => {
    var productsData = await collection.find().toArray();
    res.json({
      ok: true,
      results: productsData,
    });
  }
); //http://localhost:8989/products/getproducts

route.get("/getelectronics", (req, res) => {
  res.send({
    ok: true,
    result: "All Electronics Products",
  });
}); //http://localhost:8989/products/getelectronics

module.exports = route;

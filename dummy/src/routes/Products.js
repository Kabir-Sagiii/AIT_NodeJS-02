const express = require("express");
const route = express.Router();

route.get("/getproducts", (req, res) => {}); //http://localhost:8989/products/getproducts

route.get("/getelectronics", (req, res) => {}); //http://localhost:8989/products/getelectronics

module.exports = route;

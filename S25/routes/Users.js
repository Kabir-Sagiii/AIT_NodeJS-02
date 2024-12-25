const express = require("express");
const route = express.Router();
const connection = require("../utils/MongodbConnect");

route.get("/getusers", async (req, res) => {
  const collection = await connection("users");
  var users = await collection.find({}).toArray();
  res.send({
    ok: true,
    status: 200,
    results: users,
  });
}); //http://localhost:8989/users/getuser

route.get(
  "/dummy",
  (req, res, next) => {
    var name = "xyz";
    if (name === "xyz") {
      console.log("middleware 1");
      next();
    } else {
      res.send({
        ok: false,
        result: "Invalid User",
      });
    }
  }, //middleware
  (req, res, next) => {
    console.log("middleware 2");
    next();
  },
  (req, res) => {
    console.log("route handler triggered");
    res.send({
      ok: true,
      result: "API is Working",
    });
  } //route handler
); //http://localhost:8989/users/dummy

module.exports = route;

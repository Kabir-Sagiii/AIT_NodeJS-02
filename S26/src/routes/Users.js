const express = require("express");
const userModel = require("../model/UserModel");

const route = express.Router();

route.post("/newuser", async (req, res) => {
  var newUser = {
    name: "S5",
    status: false,
    email: "s51@gmail.com",
    phone: 9898987654,
  };

  const newuser = new userModel(newUser);

  await newuser.save();
  res.send("Inserted User");
}); //http://localhost:8989/users/newuser

route.get("/getusers", async (req, res) => {}); //http://localhost:8989/users/getuser

route.get("/get", (req, res) => {}); //http://localhost:8989/users/dummy

module.exports = route;

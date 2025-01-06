const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
const secretkey = "fkjefcjnfverjknvekrjnvejknbvjkb";

const route = express.Router();

route.post("/login", async (req, res) => {
  var userdata = req.body;
  const user = await User.find(userdata);
  if (user.length > 0) {
    //generate a token
    const token = jwt.sign(userdata, secretkey);
    res.json({
      ok: true,
      result: token,
    });
  } else {
    res.json({
      ok: false,
      result: "User doesnt Exist",
    });
  }
}); //http://localhost:8989/auth/login

route.post("/newuser", async (req, res) => {
  try {
    var newUser = req.body;
    console.log(newUser);
    const newuser = new User(newUser);

    await newuser.save();
    res.json({
      ok: true,
      result: "user created successfully",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
}); //http://localhost:8989/auth/newuser

module.exports = route;

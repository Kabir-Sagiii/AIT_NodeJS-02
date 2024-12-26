const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../model/UserModel");
const secretkey = "fkjefcjnfverjknvekrjnvejknbvjkb";
const route = express.Router();

route.post("/newuser", async (req, res) => {
  var newUser = req.body;
  console.log(newUser);
  const newuser = new userModel(newUser);

  await newuser.save();
  res.send("Inserted User");
}); //http://localhost:8989/users/newuser

route.get("/login", async (req, res) => {
  var userdata = req.body;
  const user = await userModel.find(userdata);
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
}); //http://localhost:8989/users/login

route.get("/getallusers", async (req, res) => {
  //check the token,verify,
  // console.log(req.headers["authorization"].slice(7));
  console.log(req.headers);
  var token = req.headers["authorization"].slice(7);
  jwt.verify(token, secretkey, async (error) => {
    if (error) {
      res.json({
        ok: false,
        result: "Invalid token",
      });
    } else {
      const users = await userModel.find({});
      if (users.length > 0) {
        res.json({
          ok: true,
          result: users,
        });
      } else {
        res.json({
          ok: false,
          result: "failed to fetch the data",
        });
      }
    }
  });
}); //http://localhost:8989/users/getallusers

module.exports = route;

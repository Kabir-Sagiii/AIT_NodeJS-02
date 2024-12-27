const express = require("express");
const User = require("../model/UserModel");
const route = express.Router();
const { ObjectId } = require("mongoose");
const auth = require("../middleware/Auth");

route.post("/newuser", auth, async (req, res) => {
  try {
    var newUser = req.body;

    const newuser = new User(newUser);

    await newuser.save();
    res.send("Inserted User");
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
}); //http://localhost:8989/users/newuser

route.get("/login", async (req, res) => {
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
}); //http://localhost:8989/users/login

route.get("/getallusers", async (req, res) => {
  const users = await User.find({});
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
}); //http://localhost:8989/users/getallusers

route.delete("/remove/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    var resp = await User.deleteOne({ _id: id });
    console.log(resp);
    res.json({
      ok: true,
      result: "deleted",
    });
  } catch (error) {
    res.json({
      ok: true,
      result: "Error while deleting user",
    });
  }
}); //http://localhost:8989/users/remove/<id>

route.put("/update/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndUpdate({ _id: id }, req.body);
    res.send({
      ok: true,
      result: "updated user",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
}); //http://localhost:8989/users/update/<id>

module.exports = route;

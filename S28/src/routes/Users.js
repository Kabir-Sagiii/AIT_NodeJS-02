const express = require("express");

const User = require("../model/UserModel");

const authMiddleware = require("../middleware/auth");
const route = express.Router();

route.get("/getallusers", authMiddleware, async (req, res) => {
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

route.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete({ _id: id });
    res.json({
      ok: true,
      result: "user removed successfully",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: "failed to remove user",
    });
  }
}); //http://localhost:8989/users/delete/<id>

route.put("/update/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndUpdate({ _id: id }, req.body);
    res.json({
      ok: true,
      result: "User Updated",
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});
//localhost:8989/users/update/<id>

http: module.exports = route;

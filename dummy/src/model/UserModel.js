const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "xyz",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  status: Boolean,
  phone: Number,
});

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;

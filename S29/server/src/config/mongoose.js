const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongoosedb")
  .then(() => {
    console.log("Connect with Database successfully");
  })
  .catch(() => {
    console.log("Failed to connect with database");
  });

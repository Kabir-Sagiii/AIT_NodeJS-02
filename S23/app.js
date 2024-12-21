const express = require("express");
const usercollection = require("./utils/MongodbConnect");
const port = 8989;
const app = express();

app.get("/get", async (req, res) => {
  const collection = await usercollection();
  var users = await collection.find({}).toArray();
  res.send({
    ok: true,
    status: 200,
    results: users,
  });
});
//route handler //Rest API //http://localhost:8989/get

app.listen(port, () => {
  console.log("Server is Started");
});

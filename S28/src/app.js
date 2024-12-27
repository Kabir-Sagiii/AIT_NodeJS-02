const express = require("express");
const port = 8989;
const app = express();
const UserRoute = require("./routes/Users");
const AuthRoute = require("./routes/auth");
const ProductRoute = require("./routes/Products");
require("./config/mongoose");

app.use(express.json());
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

app.use("/products", ProductRoute);

app.listen(port, () => {
  console.log("Server is Started");
});

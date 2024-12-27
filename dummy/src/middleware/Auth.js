const jwt = require("jsonwebtoken");
const secretkey = "fkjefcjnfverjknvekrjnvejknbvjkb";

function auth(req, res, next) {
  if (req.headers["authorization"] === undefined) {
    res.json({
      ok: false,
      result: "no token",
    });
  } else {
    var token = req.headers["authorization"].slice(7);
    jwt.verify(token, secretkey, (error) => {
      if (error) {
        res.json({
          ok: false,
          result: "token invalid",
        });
      } else {
        next();
      }
    });
  }
}

module.exports = auth;

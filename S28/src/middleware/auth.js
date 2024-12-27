const jwt = require("jsonwebtoken");
const secretkey = "fkjefcjnfverjknvekrjnvejknbvjkb";

function authMiddleware(req, res, next) {
  if (req.headers["authorization"] === undefined) {
    res.json({
      ok: false,
      result: "no token, send the token with request",
    });
  } else {
    const token = req.headers["authorization"].slice(7);
    jwt.verify(token, secretkey, (error) => {
      if (error) {
        res.json({
          ok: false,
          result: "token is invalid",
        });
      } else {
        next();
      }
    });
  }
}

module.exports = authMiddleware;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../../db");
const signIn = (req, res) => {
  const user = req.body;
  let query, data 
  const { username, email, phone } = req.body;
  if (email) {
    query = `SELECT User.email, User.password, Role.type FROM User Join Role on User.role_id =Role.role_id where email = ?`;
    data = email;
  } else if (username) {
    query = `SELECT User.username,User.email, User.password, Role.type FROM User Join Role on User.role_id =Role.role_id where username = ?`;
    data = username;
  } else {
    query = `SELECT  User.email, User.password,User.phone, Role.type FROM User Join Role on User.role_id =Role.role_id where phone = ?`;
    data = phone;
  }
  connection.query(query, data, (err, result) => {
    if (err) throw err.sqlMessage;
    else {
      if (result.length) {
        bcrypt.compare(user.password , result[0].password, (err, output) => {
          if (output) {
            payloads = {
              email: result[0].email,
              permissions: result[0].type,
            };
            options = {
              expiresIn: process.env.TOKEN_EXPIRATION,
            };
            res.json(jwt.sign(payloads, process.env.SECRET, options));
          } else res.json("password is incorrect");
        });
      } else res.json("Invalid login");
    }
  });
};
module.exports = signIn;

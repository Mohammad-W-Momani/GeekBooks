const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../../db");
const signIn = (req, res) => {
  const user = req.body;
  let [query, data] = [,];
  const { username, email, phone } = req.body;
  if (email !== undefined) {
    query = `SELECT * FROM User WHERE email = ?`;
    data = email;
  } else if (username !== undefined) {
    query = `SELECT * FROM User WHERE username = ?`;
    data = username;
  } else {
    query = `SELECT * FROM User WHERE phone = ?`;
    data = phone;
  }
  connection.query(query, data, (err, result) => {
    if (err) throw err.sqlMessage;
    else {
      if (result.length) {
        const role = `SELECT * FROM Role WHERE role_id = ?`;
        bcrypt.compare(user.password, result[0].password, (err, output) => {
          if (output) {
            connection.query(
              role,
              result[0].Role_role_id,
              (err, permissions) => {
                if (err) throw err.sqlMessage;
                else {
                  payloads = {
                    email: result[0].email,
                    permissions: permissions[0].type,
                  };
                  options = {
                    expiresIn: process.env.TOKEN_EXPIRATION,
                  };
                  res.json(jwt.sign(payloads, process.env.SECRET, options));
                }
              }
            );
          } else res.json("password is incorrect");
        });
      } else res.json("Invalid login");
    }
  });
};
module.exports = signIn;

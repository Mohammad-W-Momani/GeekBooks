const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../db");
const signIn = async (req, res) => {
  const user = req.body;
  console.log(user);
  isItEmail = user[Object.keys(user)[0]];
  if (isItEmail.search("@") !== -1) {
    query = `SELECT * FROM User WHERE email = ?`;
    data = user.email;
  } else {
    query = `SELECT * FROM User WHERE username = ?`;
    data = user.username;
  }
  connection.query(query, data, async (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      if (result.length) {
        const role = `SELECT * FROM Role WHERE idRole = ?`;
        if (await bcrypt.compare(user.password, result[0].password)) {
          connection.query(role, result[0].Role_idRole, (err, permissions) => {
            if (err) {
              throw err;
            } else {
              payloads = {
                email: result[0].email,
                permissions: permissions[0].type,
              };
              options = {
                expiresIn: process.env.TOKEN_EXPIRATION,
              };
              res.json(jwt.sign(payloads, process.env.SECRET, options));
              // }
            }
          });
        } else {
          res.json("password is incorrect");
        }
      } else {
        res.json("Invalid login");
      }
    }
  });
};
module.exports = signIn;

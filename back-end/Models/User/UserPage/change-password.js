const connection = require("../../../db");
const bcrypt = require("bcrypt");
const passwordChecking = (password) => {
  const [upperLetter, lowerLetter, symbol, number] = [
    /[A-Z]/g,
    /[a-z]/g,
    /[.,!,@,#,$,%,^,&,*,?,_,~,-,(,), ]/g,
    /[0-9]/g,
  ];
  const [
    upperLetterChecker,
    lowerLetterChecker,
    symbolChecker,
    numberChecker,
  ] = [
    password.match(upperLetter),
    password.match(lowerLetter),
    password.match(symbol),
    password.match(number),
  ];
  if (
    password.length >= 8 &&
    upperLetterChecker !== null &&
    lowerLetterChecker !== null &&
    symbolChecker === null &&
    numberChecker !== null
  ) {
    return true;
  } else {
    return false;
  }
};
const changePassword = (req, res) => {
  const { newPassword, oldPassword } = req.body;
  const { username } = req.token;
  if (!passwordChecking(newPassword)) {
    res.json(
      "Your password must contain a number, upper & lower letter, NO whitespace, No symbol "
    );
  }
  const query = `UPDATE User SET password = ? WHERE username = ?`;
  const checkPassword = `SELECT password FROM User WHERE username= ?`;
  connection.query(checkPassword, username, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result.length) {
      bcrypt.compare(oldPassword, result[0].password, (err, output) => {
        if (err) throw err;
        if (output) {
          bcrypt.hash(newPassword, Number(process.env.SALT), (err, hash) => {
            if (err) throw err;
            const data = [hash, username];
            connection.query(query, data, (err, results) => {
              if (err) throw err.sqlMessage;
              if (results.changedRows) {
                res.json("password has been changed");
              }
            });
          });
        } else {
          res.json("Old Password is not correct");
        }
      });
    }
  });
};
module.exports = changePassword;

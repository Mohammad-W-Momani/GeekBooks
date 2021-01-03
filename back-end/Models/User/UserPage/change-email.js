const connection = require("../../../db");
const changeEmail = (req, res) => {
  const data = [req.body.newEmail, req.body.oldEmail];
  const checkingData = [data[1], req.token.username];
  const query = `UPDATE User SET email = ? WHERE email = ?`;
  const checkingEmail = `SELECT email FROM User WHERE email= ? AND username =?`;
  connection.query(checkingEmail, checkingData, (err, emailExist) => {
    if (err) throw err.sqlMessage;
    if (emailExist.length) {
      connection.query(query, data, (err, result) => {
        if (err) throw err.sqlMessage;
        if (result.changedRows) {
          res.json("Your email has changed to " + req.body.newEmail);
        }
      });
    } else {
      res.json("old email is not correct");
    }
  });
};
module.exports = changeEmail;

const connection = require("../../../db");
const changeNumber = (req, res) => {
  const data = [req.body.newNumber, req.body.oldNumber];
  const checkingData = [data[1], req.token.username];
  const query = `UPDATE User SET phone = ? WHERE phone = ?`;
  const checkingPhone = `SELECT phone,username FROM User WHERE phone= ? AND username =?`;
  connection.query(checkingPhone, checkingData, (err, phoneExist) => {
    if (err) throw err.sqlMessage;
    if (phoneExist.length) {
      connection.query(query, data, (err, result) => {
        if (err) throw err.sqlMessage;
        if (result) {
          res.json("Your phone number has changed to " + req.body.newNumber);
        }
      });
    } else {
      res.json("old phone number is not correct");
    }
  });
};
module.exports = changeNumber;

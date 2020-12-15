const connection = require("../../db");
const userChats = (req, res) => {
  const data = [req.token.username, req.token.username];
  const query = `SELECT * FROM Live_Chat WHERE sender=? OR receiver = ?`;
  connection.query(query, data, (err, result) => {
    if (err) throw err.sqlMessage;
    res.json(result);
  });
};
module.exports = userChats;

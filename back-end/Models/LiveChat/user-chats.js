const connection = require("../../db");
const userChats = (req, res) => {
  const { username } = req.token;
  const query = `SELECT DISTINCT receiver FROM Live_Chat WHERE sender=? `;
  connection.query(query, username, (err, result) => {
    if (err) throw err.sqlMessage;
    result = result.filter((element) => {
      return element.receiver !== username;
    });
    result = result.filter((element) => {
      return typeof element !== "undefined";
    });
    res.json(result);
  });
};
module.exports = userChats;

const connection = require("../../../db");
const getUserByName = (req, res) => {
  const { username } = req.params; 
  const query = `SELECT * FROM User WHERE username = ?`;
  connection.query(query, username, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = getUserByName;
 
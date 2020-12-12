const connection = require("../../db");
const userGroups = (req, res) => {
  const { username } = req.params;
  const query = `SELECT class_name FROM Members WHERE username = ?`;
  connection.query(query, username, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result.length) {
      res.json(result);
      return;
    }
    res.json("The user has no Groups");
    return;
  });
};
module.exports = userGroups;

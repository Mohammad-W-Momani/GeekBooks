const connection = require("../../db");
const getFollowers = (req, res) => {
  const data = req.params.username;
  const query = `SELECT following_username FROM Follower_system WHERE follower_username =?`;
  connection.query(query, data, (err, results) => {
    if (err) throw err.sqlMessage;

    res.json(results);
  });
};
module.exports = getFollowers;

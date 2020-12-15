const connection = require("../../db");
const getUserFollowing = (req, res) => {
  const { username } = req.params;
  const query = `SELECT following_username FROM Follower_system WHERE follower_username = ?`;
  connection.query(query, username, (err, results) => {
    if (err) throw err.sqlMessage;
    res.json(results);
  });
};
module.exports = getUserFollowing;

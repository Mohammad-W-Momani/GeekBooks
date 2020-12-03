const connection = require("../../db");
const getUserFollowing = (req, res) => {
  const data = req.params.username;
  const query = `SELECT follower_username FROM Follower_system WHERE following_username =?`;
  connection.query(query, data, (err, results) => {
    if (err) throw err.sqlMessage;
    res.json(results);
  });
};
module.exports = getUserFollowing;

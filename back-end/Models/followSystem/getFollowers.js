const connection = require("../../db");
const getFollowers = (req, res) => {
  const { username } = req.params;
  const query = `SELECT follower_username FROM Follower_system WHERE following_username =?`;
  connection.query(query, username, (err, results) => {
    if (err) throw err.sqlMessage;

    res.json(results);
  });
};
module.exports = getFollowers;

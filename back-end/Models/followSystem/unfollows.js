
const connection = require("../../db");
const unfollows = (req, res) => {
  const data = [req.token.username, req.params.username];
  const query = `DELETE FROM Follower_system WHERE (follower_username,following_username) = (?,?)`;
  connection.query(query, data, (err, result) => {
    if (err) throw err.sqlMessage;
  });
};
module.exports = unfollows;

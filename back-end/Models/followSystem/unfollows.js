const jwt_decode = require("jwt-decode");
const connection = require("../../db");
const unfollows = (req, res) => {
  const token = req.headers.authorization.split(" ").pop();
  const decoded = jwt_decode(token);
  const followerData = [decoded.username, req.params.username];
  const followerQuery = `DELETE FROM Follower_system WHERE (follower_username,following_username) = (?,?)`;
  connection.query(followerQuery, followerData, (err, result) => {
    if (err) throw err.sqlMessage;
  });
};
module.exports = unfollows;

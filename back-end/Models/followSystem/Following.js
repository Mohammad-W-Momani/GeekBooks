const jwt_decode = require("jwt-decode");
const connection = require("../../db");
const followUser = (req, res) => {
  const token = req.headers.authorization.split(" ").pop();
  const decoded = jwt_decode(token);
  const followerData = [decoded.username, req.params.username, null];
  if (decoded.username === req.params.username) {
    res.json("You cant follow yourself");
  } else {
    const followerQuery = `INSERT INTO Follower_system(follower_username,following_username,Follows_id) VALUES (?,?,?)`;
    connection.query(followerQuery, followerData, (err, result) => {
      if (err) throw err.sqlMessage;
      res.json("You have been followed by " + decoded.username);
    });
  }
};
module.exports = followUser;

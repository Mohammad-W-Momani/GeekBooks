const connection = require("../../db");
const followUser = (req, res) => {
  const data = [req.token.username, req.params.username, null];
  const checkingData = [req.token.username, req.params.username];
  if (req.token.username === req.params.username) {
    res.json("You cannot follow yourself");
  } else {
    const checkingUser = `SELECT follower_username,following_username FROM Follower_system WHERE follower_username=? AND following_username = ?`;
    connection.query(checkingUser, checkingData, (err, result) => {
      if (err) throw err.sqlMessage;
      if (result.length) {
        res.json("You have already followed " + req.params.username);
      } else {
        const query = `INSERT INTO Follower_system(follower_username,following_username,Follows_id) VALUES (?,?,?)`;
        connection.query(query, data, (err, follows) => {
          if (err) throw err.sqlMessage;
          res.json("You have been followed by " + req.token.username);
        });
      } 
    });
  }
};
module.exports = followUser;

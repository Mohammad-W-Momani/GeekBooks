const connection = require("../../db");
const homePost = (req, res) => {
  const { username } = req.token;
  const query = `SELECT Follower_system.following_username, Post.post, Post.username, Post.created_time  FROM Follower_system JOIN Post ON Follower_system.following_username =Post.username WHERE follower_username =? AND class_name IS NULL`;
  connection.query(query, username, (err, followers) => {
    if (err) throw err.sqlMessage;
    res.json(followers);
  });
};
module.exports = homePost;

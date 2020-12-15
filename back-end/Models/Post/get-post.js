const connection = require("../../db");
const getPostByID = (req, res) => {
  const { post_id } = req.params;
  const query = `SELECT * FROM Post WHERE post_id =?`;
  connection.query(query, post_id, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
const getUserPosts = (req, res) => {
  const { username } = req.params;
  const query = `SELECT * FROM Post WHERE username =? AND class_name IS NULL`;
  connection.query(query, username, (err, results) => {
    if (err) throw err;
    if (results.length) {
      res.json(results);
      return;
    }
    res.json("Add new posts ");
    return;
  });
};
module.exports = { getPostByID, getUserPosts };

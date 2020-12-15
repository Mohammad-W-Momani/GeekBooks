const connection = require("../../db");
const getComment = (req, res) => {
  const { comment_id } = req.params;
  const query = `SELECT * FROM Comment WHERE comment_id=?`;
  connection.query(query, comment_id, (err, results) => {
    if (err) throw err;
    if (results.length) {
      res.json(results);
      return;
    }
    res.json("there is No comment ");
    return;
  });
};
const PostComments = (req, res) => {
  const data = [req.params.username, req.params.post_id];
  const query = "SELECT * FROM Comment WHERE username =? AND  post_id = ?";
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    if (results.length) {
      res.json(results);
      return;
    }
    res.json("Add new Comments ");
    return;
  });
};

module.exports = { getComment, PostComments };

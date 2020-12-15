const connection = require("../../db");
const addComment = (req, res) => {
  const data = [req.body.comment, null, req.token.username, req.params.post_id];
  const query = `INSERT INTO Comment(comment,comment_id,username,post_id) VALUES (?,?,?,?)`;
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(req.body.comment);
  });
};
module.exports = addComment;

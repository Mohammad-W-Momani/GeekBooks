const connection = require("../../db");

//Add new comment
const addComment = (req, res) => {
  const comment = req.body;
  comment.user_id = null;
  comment.post_id = null;
  const query = `INSERT INTO comment (comment, thumbs_up) VALUES (?, ?)`;
  const data = [comment.comment, comment.thumbs_up];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Update comment
const updateCommentById = (req, res) => {
  const token_user_id = res.token.user_id;
  const user_id = comment.user_id;
  const comment = req.body;
  const commentID = req.params.comment_id;
  if (token_user_id === user_id) {
    const query = `UPDATE comment SET comment=?, thumbs_up=? WHERE comment_id=?`;
    const data = [comment.comment, comment.thumbs_up];
    connection.query(query, data, commentID, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  }
};

//Delete comments
const deleteCommentsById = (req, res) => {
  const token_user_id = res.token.user_id;
  const user_id = comment.user_id;
  const comment = req.body;
  const commentID = req.params.comment_id;
  if (token_user_id === user_id) {
    const query = `DELETE FROM comment WHERE comment_id=?`;
    connection.query(query, commentID, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  }
};

module.exports = {
  addComment,
  updateCommentById,
  deleteCommentsById,
};

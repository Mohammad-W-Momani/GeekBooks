const connection = require("../../db");
const commentLikes = (req, res) => {
  const { comment_id } = req.params;
  const checkUser = `SELECT * FROM Thumbsup WHERE comment_id =?`;
  connection.query(checkUser, comment_id, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result) {
      res.json(result);
    }
  });
};
module.exports = commentLikes;

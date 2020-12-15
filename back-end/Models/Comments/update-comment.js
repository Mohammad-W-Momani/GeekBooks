const connection = require("../../db");
const updateComments = (req, res) => {
  const data = [req.body.comment, req.params.comment_id];
  const { username } = req.token;
  const checkAuth = `SELECT * FROM Comment WHERE comment_id=?`;
  const query = `UPDATE Comment SET comment=? WHERE comment_id=?`;
  connection.query(checkAuth, data[1], (err, Comment) => {
    if (err) throw err.sqlMessage;
    if (Comment[0].username === username) {
      connection.query(query, data, (err, results) => {
        if (err) throw err;
        res.json(data[0]);
      });
    } else {
      return "You have not authorized";
    }
  });
};
module.exports = updateComments;

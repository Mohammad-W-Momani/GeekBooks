const connection = require("../../db");
const postLikes = (req, res) => {
  const { post_id } = req.params;
  const checkUser = `SELECT * FROM Thumbsup WHERE post_id =?`;
  connection.query(checkUser, post_id, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result) {
      res.json(result);
    }
  });
};
module.exports = postLikes;

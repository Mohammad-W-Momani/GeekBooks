const connection = require("../../db");
const likes = (req, res) => {
  const data = [req.token.username, req.params.post_id];
  const checkUser = `SELECT * FROM Thumbsup WHERE username =? AND post_id =?`;
  const dislikeQuery = `DELETE FROM Thumbsup WHERE username =? AND post_id =?`;
  const likeQuery = `INSERT INTO Thumbsup (username, post_id) VALUES (?,?)`;
  connection.query(checkUser, data, (err, result) => {
    if (err) throw err.sqlMessage;
    if (!result.length) {
      connection.query(query, dislikeQuery, (err, results) => {
        if (err) throw err.sqlMessage;
        res.json("dislike");
        return;
      });
    }
    connection.query(likeQuery, data, (err, results) => {
      if (err) throw err.sqlMessage;
      res.json("Like");
      return;
    });
  });
};
module.exports = likes;

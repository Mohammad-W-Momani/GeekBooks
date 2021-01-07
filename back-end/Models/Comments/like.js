const connection = require("../../db");
const likeComments = (req, res) => {
  const data = [req.token.username, req.params.comment_id];
  const checkUser = `SELECT * FROM Thumbsup WHERE username =? AND comment_id =?`;
  const dislikeQuery = `DELETE FROM Thumbsup WHERE username =? AND comment_id =?`;
  const likeQuery = `INSERT INTO Thumbsup (username, comment_id) VALUES (?,?)`;
  connection.query(checkUser, data, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result.length) {
      connection.query(dislikeQuery, data, (err, results) => {
        if (err) throw err.sqlMessage;
        res.json("dislike");
        return;
      });
    } else {
      connection.query(likeQuery, data, (err, result) => {
        if (err) throw err.sqlMessage;
        res.json("Like");
        return;
      });
    }
    
  });
};
module.exports = likeComments;

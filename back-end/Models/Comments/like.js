const connection = require("../../db");
const likeComments = (req, res) => {
  const data = [req.token.username, req.params.comment_id];
  const checkUser = `SELECT * FROM Thumbsup WHERE username =? AND comment_id =?`;
  const query = `INSERT INTO Thumbsup (username, comment_id) VALUES (?,?)`;
  connection.query(checkUser, data, (err, result) => {
    if (err) throw err.sqlMessage;
    if (!result.length) {
      connection.query(query, data, (err, results) => {
        if (err) throw err.sqlMessage;
        res.json("Like");
      });
    }
  });
};
module.exports = likeComments;

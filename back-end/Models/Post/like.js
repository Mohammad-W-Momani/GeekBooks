const connection = require("../../db");
const likes = (req, res) => {
  const data = [req.token.username, req.params.post_id];
  const checkUser = `SELECT * FROM Thumbsup WHERE username =? AND post_id =?`;
  const query = `INSERT INTO Thumbsup (username, post_id) VALUES (?,?) `;
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
module.exports = likes;

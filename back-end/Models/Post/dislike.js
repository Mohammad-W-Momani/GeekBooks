const connection = require("../../db");
const dislikes = (req, res) => {
  const data = [req.token.username, req.params.post_id];
  const checkUser = `SELECT * FROM Thumbsup WHERE username =? AND post_id =?`;
  const query = `DELETE FROM Thumbsup WHERE username =? AND post_id =?`;
  connection.query(checkUser, data, (err, result) => {
    if (err) throw err.sqlMessage;
    console.log(result)
    if (result.length) {
      connection.query(query, data, (err, results) => {
        if (err) throw err.sqlMessage;
        res.json("dislike");
      });
    }
  });
};
module.exports = dislikes;

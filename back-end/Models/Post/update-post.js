const connection = require("../../db");
const updatePosts = (req, res) => {
  const data = [req.body.post, req.params.post_id];
  const { username } = req.token;
  const checkAuth = `SELECT * FROM Post WHERE post_id=?`;
  const query = `UPDATE Post SET post=? WHERE post_id=?`;
  connection.query(checkAuth, data[1], (err, post) => {
    if (err) throw err.sqlMessage;
    if (post[0].username === username) {
      connection.query(query, data, (err, results) => {
        if (err) throw err;
        res.json(data[0]);
      });
    } else {
      return "You are not authorized";
    }
  });
};
module.exports = updatePosts;

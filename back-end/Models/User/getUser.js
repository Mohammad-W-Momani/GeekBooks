const getUserByName = (req, res) => {
  const userId = req.params.username;
  const query = `SELECT * FROM user WHERE username = ?`;
  connection.query(query, userId, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = getUserByName;

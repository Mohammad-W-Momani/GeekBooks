const connection = require("../../../db");
const getReadList = (req, res) => {
  const { user_id } = req.token;
  const query = `SELECT have_read FROM User_List WHERE  user_id = ?`;
  connection.query(query, user_id, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result.length) {
      res.json(result);
      return;
    } else {
      res.json("No book added yet");
    }
  });
};
module.exports = getReadList;

const connection = require("../../db");
const deleteGroup = (req, res) => {
  const { user_id } = req.token;
  const { class_name } = req.params;
  const query = `DELETE FROM Class WHERE class_name =?`;
  const checkGroup = `SELECT * FROM Class WHERE class_name = ?`;
  connection.query(checkGroup, class_name, (err, group) => {
    if (err) throw err.sqlMessage;
    if (group[0].user_id === user_id) {
      connection.query(query, class_name, (err, result) => {
        if (err) throw err.sqlMessage;
        res.json("The group has been deleted successfully");
      });
    } else {
      res.json("You are not the Admin of the group");
    }
  });
};
module.exports = deleteGroup;

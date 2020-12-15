const connection = require("../../db");
const removeMember = (req, res) => {
  const { user_id } = req.token;
  const data = [req.params.class_name, req.body.username];
  const query = `DELETE FROM Members WHERE class_name =? AND username =?`;
  const checkGroup = `SELECT * FROM Class WHERE class_name = ?`;
  connection.query(checkGroup, data[0], (err, group) => {
    if (err) throw err.sqlMessage;
    if (group[0].user_id === user_id) {
      connection.query(query, data, (err, result) => {
        if (err) throw err.sqlMessage;
        if (result) res.json("The user has been removed successfully");
      });
    } else {
      res.json("You are not the Admin of the group");
    }
  });
};
module.exports = removeMember;

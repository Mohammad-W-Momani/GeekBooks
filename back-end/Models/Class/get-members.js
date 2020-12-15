const connection = require("../../db");
const getMembers = (req, res) => {
  const { class_name } = req.params;
  const query = `SELECT username, adder_name FROM Members WHERE class_name = ?`;
  connection.query(query, class_name, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result.length) {
      res.json(result);
    }
    res.json("The Group has no member");
  });
};
module.exports = getMembers;

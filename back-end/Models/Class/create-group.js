const connection = require("../../db");
const createGroup = (req, res) => {
  const groupBody = req.body;
  const { user_id, username } = req.token;
  const data = [null, groupBody.class_name, groupBody.description, user_id];
  const admin = [username, groupBody.class_name, username];
  const query = `INSERT INTO Class(class_id,class_name,description,user_id) VALUES (?, ?, ?, ?) `;
  const addAdmin = `INSERT INTO Members (username,class_name,adder_name) VALUES  (?,?,?)`;
  connection.query(query, data, (err, group) => {
    if (err) res.json("The name of group is already exist");
    if (group) {
      connection.query(addAdmin, admin, (err, result) => {
        if (err) throw err.sqlMessage;
        if (result) res.json("Group has been created successfully");
      });
    }
  });
};
module.exports = createGroup;

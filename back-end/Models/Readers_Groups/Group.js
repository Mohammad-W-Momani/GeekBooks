const connection = require("../../db");

//Show all Group
const getAllGroup = (req, res) => {
  const query = "SELECT * FROM reader_group";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Show GroupsByID
const getGroupByID = (req, res) => {
  const groupID = req.params.group_id;
  const query = `SELECT * FROM reader_group WHERE group_id=?`;
  connection.query(query, groupID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Add new Groups
const addGroup = (req, res) => {
  const group = req.body;
  group.user_id = null;
  group.post_id = null;
  const query = `INSERT INTO reader_group (group_name, description, members) VALUES (?, ?, ?)`;
  const data = [group.group_name, group.description, group.members];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Update Groups
const updateGroupById = (req, res) => {
  const token = req.headers.authorization.split(" ").pop();
  const decoded = jwt_decode(token);
  const token_user_id = decoded.user_id;
  const user_id = group.user_id;
  const group = req.body;
  const groupID = req.params.group_id;
  if (token_user_id === user_id) {
    const query = `UPDATE reader_group SET group_name=?, description=?, members=? WHERE group_id=?`;
    const data = [group.group_name, group.description, group.members];
    connection.query(query, data, groupID, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  }
};

//Delete Groups
const deleteGroupById = (req, res) => {
  const token = req.headers.authorization.split(" ").pop();
  const decoded = jwt_decode(token);
  const token_user_id = decoded.user_id;
  const user_id = group.user_id;
  const group = req.body;
  const groupID = req.params.group_id;
  if (token_user_id === user_id) {
    const query = `DELETE FROM reader_group WHERE group_id=?`;
    connection.query(query, groupID, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  }
};

module.exports = {
  getAllGroup,
  getGroupByID,
  updateGroupById,
  addGroup,
  deleteGroupById,
};

const connection = require("../../db");
require("dotenv").config();

//Show all Group
const getAllGroup = (req, res) => {
  let sql = "SELECT * FROM reader_group";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Show postsByID
const getGroupByID = (req, res) => {
  let groupID = req.params.group_id;
  let sql = `SELECT * FROM reader_group WHERE group_id=?`;
  connection.query(sql, groupID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Update posts
const updateGroupById = (req, res) => {
  let post = req.body.post;
  let groupID = req.params.group_id;
  let sql = `UPDATE reader_group SET post=? WHERE group_id=?`;
  connection.query(sql, post, groupID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};


//Add new posts
const addGroup = (req, res) => {
  let sql = "INSERT INTO reader_group SET ?";
  let post = req.body.post;
  connection.query(sql, post, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Delete posts
const deleteGroupById = (req, res) => {
  let groupID = req.params.group_id;
  let sql = `DELETE FROM reader_group WHERE group_id=?`;
  connection.query(sql, groupID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = {
  getAllGroup,
  getGroupByID,
  updateGroupById,
  addGroup,
  deleteGroupById
};

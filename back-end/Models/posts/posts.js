const connection = require("../../db");
require("dotenv").config();

//Show all posts
const getAllPosts = (req, res) => {
  let sql = "SELECT * FROM post";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Update posts
const updatePostsById = (req, res) => {
  let post = req.body.post;
  let postID = req.params.post_id;
  let sql = `UPDATE post SET post=? WHERE post_id=?`;
  connection.query(sql, post, postID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Add new posts
const addPost = (req, res) => {
  let sql = "INSERT INTO post SET ?";
  let post = req.body.post;
  connection.query(sql, post, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Show postsByID
const getPostByID = (req, res) => {
  let postID = req.params.post_id;
  let sql = `SELECT * FROM post WHERE post_id=?`;
  connection.query(sql, postID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
//Delete posts
const deletePostById = (req, res) => {
  let postID = req.params.post_id;
  let sql = `DELETE FROM post WHERE post_id=?`;
  connection.query(sql, postID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = {
  getAllPosts,
  getPostByID,
  updatePostsById,
  deletePostById,
  addPost
};

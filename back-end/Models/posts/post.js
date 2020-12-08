const connection = require("../../db");

//Show all posts
const getAllPosts = (req, res) => {
  const query = "SELECT * FROM post";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Show postsByID
const getPostByID = (req, res) => {
  const postID = req.params.post_id;
  const query = `SELECT * FROM post WHERE post_id=?`;
  connection.query(query, postID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Update posts
const updatePostsById = (req, res) => {
  const token_user_id = res.token.user_id;
  const user_id = post.user_id;
  const post = req.body;
  const postID = req.params.post_id;
  if (token_user_id === user_id) {
    const query = `UPDATE post SET post=? WHERE post_id=?`;
    const data = [post.post, post.thumbs_up];
    connection.query(query, data, postID, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } else {
    return "You are not authorized";
  }
};

//Add new posts
const addPost = (req, res) => {
  post.user_id = null;
  const post = req.body;
  const query = `INSERT INTO post (post, thumbs_up) VALUES (?, ?)`;
  const data = [post.post, post.thumbs_up];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Delete posts
const deletePostById = (req, res) => {
  const token_user_id = res.token.user_id;
  const user_id = post.user_id;
  const post = req.body;
  const postID = req.params.post_id;
  if (token_user_id === user_id) {
    const query = `DELETE FROM post WHERE post_id=?`;
    connection.query(query, postID, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } else {
    return "You are not authorized";
  }
};

module.exports = {
  getAllPosts,
  getPostByID,
  updatePostsById,
  deletePostById,
  addPost,
};

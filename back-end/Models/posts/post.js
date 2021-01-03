const connection = require("../../db");

const getPostByID = (req, res) => {
  const { post_id } = req.params;
  const query = `SELECT * FROM Post WHERE post_id=?`;
  connection.query(query, post_id, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const getUserPosts = (req, res) => {
  const { username } = req.params;
  const query = `SELECT * FROM Post WHERE username =? AND class_name IS NULL `;
  connection.query(query, username, (err, results) => {
    if (err) throw err;
    if (results.length) {
      res.json(results);
      return;
    }
    res.json("Add new posts ");
    return;
  });
};

//Update posts
const updatePostsById = (req, res) => {
  const token_user_id = req.token.user_id;
  const { user_id, post, thumbs_up } = req.body;
  const postID = req.params.post_id;
  if (token_user_id === user_id) {
    const query = `UPDATE post SET post=? WHERE post_id=?`;
    const data = [post, thumbs_up];
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
  const { post, thumbs_up } = req.body;
  post.user_id = null;
  const query = `INSERT INTO post (post, thumbs_up) VALUES (?, ?)`;
  const data = [post, thumbs_up];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Delete posts
const deletePostById = (req, res) => {
  const token_user_id = req.token.user_id;
  const user_id = req.body;
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
  getUserPosts,
  getPostByID,
  updatePostsById,
  deletePostById,
  addPost,
};

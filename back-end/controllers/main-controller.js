const signIn = require("../Models/User/LogIn");
const signUp = require("../Models/User/signup");
const {
  getAllPosts,
  getPostByID,
  updatePostsById,
  deletePostById,
  addPost,
} = require("../Models/posts/posts");

const {
  addComment,
  updateCommentById,
  deleteCommentsById,
} = require("../Models/comments/comment");
// sign up
const register = signUp;
//Login
const logIn = signIn;
const home = (req, res) => {
  res.json("Welcome To Your Place");
};
// Create Post
const createPost = addPost;
// update post
const updatePost = updatePostsById;
// delete post
const deletePost = deletePostById;
// get All user Post
const UserPost = getAllPosts;
// show one post
const post = getPostByID;

// Create Comment
const createComment = addComment
// update Comment
const updateComment = updateCommentById

//delete Comment
const deleteComment = deleteCommentsById
module.exports = {
  logIn,
  register,
  home,
  updatePost,
  createPost,
  UserPost,
  deletePost,
  post,
  createComment,
  updateComment,
  deleteComment
};

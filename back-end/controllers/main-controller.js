const signIn = require("../Models/User/LogIn");
const signUp = require("../Models/User/signup");
const {
  getAllPosts,
  getPostByID,
  updatePostsById,
  deletePostById,
  addPost,
} = require("../Models/posts/post");

const {
  addComment,
  updateCommentById,
  deleteCommentsById,
} = require("../Models/comments/comment");

const {
  getAllGroup,
  getGroupByID,
  addGroup,
  updateGroupById,
  deleteGroupById,
} = require("../Models/Readers_Groups/groups");
// sign up
const register = signUp;
//Login
const logIn = signIn;
const home = (req, res) => {
  res.json("Welcome To Your Place");
};

//Posts
// Create Post
const createPost = addPost;
// update post
const updatePost = updatePostsById;
// delete post
const deletePost = deletePostById;
// get All user Post
const allPosts = getAllPosts;
// show one post
const post = getPostByID;

//Comments
// Create Comment
const createComment = addComment;
// update Comment
const updateComment = updateCommentById;
//delete Comment
const deleteComment = deleteCommentsById;

module.exports = {
  logIn,
  register,
  home,
  updatePost,
  createPost,
  allPosts,
  deletePost,
  post,
  createComment,
  updateComment,
  deleteComment,
};

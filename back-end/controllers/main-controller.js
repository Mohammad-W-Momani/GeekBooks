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

const {
  getAllGroup,
  getGroupByID,
  addGroup,
  updateGroupById,
  deleteGroupById,
} = require("../Models/Readers_Groups/group");
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
const UserPost = getAllPosts;
// show one post
const post = getPostByID;

//Comments
// Create Comment
const createComment = addComment;
// update Comment
const updateComment = updateCommentById;
//delete Comment
const deleteComment = deleteCommentsById;

//Groups
// get All user Group
const allGroup = getAllGroup;
// show one Group
const Group = getGroupByID;
// Create Group
const createGroup = addGroup;
// update Group
const updateGroup = updateGroupById;
// delete Group
const deleteGroup = deleteGroupById;

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
  deleteComment,
  allGroup,
  Group,
  createGroup,
  updateGroup,
  deleteGroup,
};

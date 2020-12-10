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

const followUser = require("../Models/followSystem/Following");
const getUserByName = require("../Models/User/getUser");
const getFollowers = require("../Models/followSystem/getFollowers");
const getUserFollowing = require("../Models/followSystem/getFollowing");
const unFollows = require("../Models/followSystem/unfollows");

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

const getUser = getUserByName;
const follow = followUser;
const getFollower = getFollowers;
const getFollowing = getUserFollowing;
const unfollowUser = unFollows;

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
  follow,
  getUser,
  getFollower,
  getFollowing,
  unfollowUser,
};

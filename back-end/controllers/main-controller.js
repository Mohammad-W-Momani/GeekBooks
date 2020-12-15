const signIn = require("../Models/User/Entry/LogIn");
const signUp = require("../Models/User/Entry/signup");

const {
  getUserPosts,
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

const getUserByName = require("../Models/User/UserPage/getUser");
const changeEmail = require("../Models/User/UserPage/change-email");
const changePassword = require("../Models/User/UserPage/change-password");
const changeNumber = require("../Models/User/UserPage/change-phone");


const followUser = require("../Models/followSystem/Following");
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
const userPost = getUserPosts;
// show one post
const post = getPostByID;

//Comments
// Create Comment
const createComment = addComment;
// update Comment
const updateComment = updateCommentById;
//delete Comment
const deleteComment = deleteCommentsById;

// User Profile/Edit profile
const getUser = getUserByName;
const changePhone = changeNumber;
const editPassword = changePassword;
const editEmail = changeEmail;
// follow section
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
  userPost,
  deletePost,
  post,
  createComment,
  updateComment,
  deleteComment,
  follow,
  getUser,
  editEmail,
  editPassword,
  changePhone,
  getFollower,
  getFollowing,
  unfollowUser,
};

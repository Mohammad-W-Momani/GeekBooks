const signIn = require("../Models/User/LogIn");
const signUp = require("../Models/User/signup");
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
const getUser = getUserByName;
const follow = followUser;
const getFollower = getFollowers;
const getFollowing = getUserFollowing;
const unfollowUser = unFollows;
module.exports = {
  logIn,
  register,
  home,
  follow,
  getUser,
  getFollower,
  getFollowing,
  unfollowUser,
};

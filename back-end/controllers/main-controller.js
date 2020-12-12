const signIn = require("../Models/User/login");
const signUp = require("../Models/User/signup");
// follow section
const followUser = require("../Models/followSystem/following");
const getUserByName = require("../Models/User/get-user");
const getFollowers = require("../Models/followSystem/get-followers");
const getUserFollowing = require("../Models/followSystem/get-following");
const unFollows = require("../Models/followSystem/unfollows");
// chat section
const liveChat = require("../Models/LiveChat/live-chat");
const getUserChat = require("../Models/LiveChat/get-chat");
const userChats = require("../Models/LiveChat/user-chats");
// group section
const createGroup = require("../Models/Class/create-group");
const deleteGroup = require("../Models/Class/delete-group");
const addMembers = require("../Models/Class/add-members");
const getMembers = require("../Models/Class/get-members");
const userGroups = require("../Models/Class/get-user-groups");
const getGroupPosts = require("../Models/Class/group-post");
const removeMember = require("../Models/Class/remove-member");
// post section
const addPost = require("../Models/Post/create-post");
const deletePost = require("../Models/Post/delete-post");
const { getUserPosts, getPostByID } = require("../Models/Post/get-post");
const updatePosts = require("../Models/Post/update-post");
const likes = require("../Models/Post/like");
const dislikes = require("../Models/Post/dislike");
// comment section
const addComment = require("../Models/Comments/create-comment");
const deleteComment = require("../Models/Comments/delete-comment");
const updateComments = require("../Models/Comments/update-comment");
const { getComment, PostComments } = require("../Models/Comments/get-comment");
const likeComments = require("../Models/Comments/like");
const dislikeComments = require("../Models/Comments/dislike");
// sign up
const register = signUp;
//Login
const login = signIn;
const home = (req, res) => {
  res.json("Welcome To Your Place");
};
// follow section
const getUser = getUserByName;
const follow = followUser;
const getFollower = getFollowers;
const getFollowing = getUserFollowing;
const unfollowUser = unFollows;
// chat section
const chatting = liveChat;
const getChat = getUserChat;
const userChat = userChats;
// group section
const newGroup = createGroup;
const removeGroup = deleteGroup;
const addMember = addMembers;
const getGroupMember = getMembers;
const userGroup = userGroups;
const removeUser = removeMember;
// post section
const createPost = addPost;
const removePost = deletePost;
const usersPost = getUserPosts;
const post = getPostByID;
const groupPosts = getGroupPosts;
const like = likes;
const updatePost = updatePosts;
const dislike = dislikes;
// comment section
const comment = getComment;
const postComment = PostComments;
const dislikeComment = dislikeComments;
const removeComment = deleteComment;
const updateComment = updateComments;
const likeComment = likeComments;
const createComment = addComment;
module.exports = {
  login,
  register,
  home,
  follow,
  getUser,
  getFollower,
  getFollowing,
  unfollowUser,
  chatting,
  getChat,
  userChat,
  newGroup,
  removeGroup,
  addMember,
  getGroupMember,
  userGroup,
  removeUser,
  createPost,
  removePost,
  usersPost,
  post,
  groupPosts,
  like,
  updatePost,
  dislike,
  comment,
  postComment,
  dislikeComment,
  removeComment,
  updateComment,
  likeComment,
  createComment,
};

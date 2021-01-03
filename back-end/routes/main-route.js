const express = require("express");
require("dotenv").config();
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
const {
  login,
  register,
  home,
  follow,
  getUser,
  getFollower,
  getFollowing,
  unfollowUser,
  chatting,
  userChat,
  getChat,
  newGroup,
  removeGroup,
  addMember,
  getGroupMember,
  userGroup,
  groupPosts,
  removeUser,
  createPost,
  removePost,
  usersPost,
  post,
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
  readList,
  removeReadList,
  readingList,
  removeReadingList,
  ToReadList,
  removeToReadList,
  getRead,
  getReading,
  getToRead,
  editEmail,
  editPassword,
  changePhone,
  homePosts,
  postLike,
  commentLike,
} = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/login", login);
// Follow section
mainRouter.post("/:username/follows", middleware, follow);
mainRouter.delete("/:username/unfollow", middleware, unfollowUser);
mainRouter.get("/:username/followers", middleware, getFollower);
mainRouter.get("/:username/following", middleware, getFollowing);
//chat section
mainRouter.post("/chat/:username", middleware, chatting);
mainRouter.get("/Chat/:username", middleware, getChat);
mainRouter.get("/chat", middleware, userChat);
// Group section
mainRouter.post("/createGroup", middleware, newGroup);
mainRouter.post("/groups/:class_name/members", middleware, addMember);
mainRouter.post("/group/:class_name/post/createpost", middleware, createPost);
mainRouter.delete("/group/:class_name", middleware, removeGroup);
mainRouter.delete("/groups/:class_name", middleware, removeUser);
mainRouter.delete("/group/:class_name/:post_id", middleware, removePost);
mainRouter.delete("/group/:class_name/:comment_id", middleware, removeComment);
mainRouter.get("/profiles/group/:username", middleware, userGroup);
mainRouter.get("/group/:class_name/members", middleware, getGroupMember);
mainRouter.get("/group/:class_name", middleware, groupPosts);
// Post section
mainRouter.post("/post/createpost", middleware, createPost);
mainRouter.post("/post/:post_id/like", middleware, like);
mainRouter.put("/post/:post_id", middleware, updatePost);
mainRouter.delete("/post/:post_id", middleware, removePost);
mainRouter.delete("/post/:post_id/dislike", middleware, dislike);
mainRouter.get("/:username/post", usersPost);
mainRouter.get("/home", middleware, homePosts);
mainRouter.get("/post/:post_id", post);
mainRouter.get("/post/like/:post_id", postLike);
// Comment section
mainRouter.post("/comment/:post_id/createcomment", middleware, createComment);
mainRouter.post("/comment/:comment_id/like", middleware, likeComment);
mainRouter.put("/comment/:comment_id", middleware, updateComment);
mainRouter.delete("/comment/:comment_id", middleware, removeComment);
mainRouter.delete("/comment/:comment_id/dislike", middleware, dislikeComment);
mainRouter.get("/post/comment/:post_id", postComment);
mainRouter.get("/comment/:comment_id", comment);
mainRouter.get("/post/comment/like/:comment_id", comment);
// user List section
// read section
mainRouter.post("/readlist", middleware, readList);
mainRouter.delete("/readlist", middleware, removeReadList);
mainRouter.get("/readlist", middleware, getRead);
// reading section
mainRouter.post("/readinglist", middleware, readingList);
mainRouter.delete("/readinglist", middleware, removeReadingList);
mainRouter.get("/readinglist", middleware, getReading);
// want to read section
mainRouter.post("/toreadlist", middleware, ToReadList);
mainRouter.delete("/toreadlist", middleware, removeToReadList);
mainRouter.get("/toreadlist", middleware, getToRead);
// User Profile/Edit profile
mainRouter.put("/profile/editemail", middleware, editEmail);
mainRouter.put("/profile/editpassword", middleware, editPassword);
mainRouter.put("/profile/editnumber", middleware, changePhone);
mainRouter.get("/profile/:username", getUser);
module.exports = mainRouter;

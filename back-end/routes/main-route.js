const express = require("express");
require("dotenv").config();
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
const {
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
} = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/Login", logIn);

mainRouter.get("/:username/post", middleware, userPost);
mainRouter.get("/posts/:Post_id", middleware, post);
mainRouter.post("/posts", middleware, createPost);
mainRouter.put("/posts/:Post_id", middleware, updatePost);
mainRouter.delete("/posts/:Post_id", middleware, deletePost);

mainRouter.post("/comments", middleware, createComment);
mainRouter.put("/comments/:comment_id", middleware, updateComment);
mainRouter.delete("/comments/:comment_id", middleware, deleteComment);

// get user
mainRouter.get("/:username", middleware, getUser);
mainRouter.put("/profile/editemail", middleware, editEmail);
mainRouter.put("/profile/editpassword", middleware, editPassword);
mainRouter.put("/profile/editnumber", middleware, changePhone);

// Follow section
mainRouter.post("/:username/Follows", middleware, follow);
mainRouter.get("/:username/Followers", getFollower);
mainRouter.get("/:username/Following", getFollowing);
mainRouter.delete("/:username/unfollow", middleware, unfollowUser);

module.exports = mainRouter;

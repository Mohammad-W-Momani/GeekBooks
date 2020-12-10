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
} = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/Login", logIn);

mainRouter.get("/posts", middleware, allPosts);
mainRouter.get("/posts/:Post_id", middleware, post);
mainRouter.post("/posts", middleware, createPost);
mainRouter.put("/posts/:Post_id", middleware, updatePost);
mainRouter.delete("/posts/:Post_id", middleware, deletePost);

mainRouter.post("/comments", middleware, createComment);
mainRouter.put("/comments/:comment_id", middleware, updateComment);
mainRouter.delete("/comments/:comment_id", middleware, deleteComment);

// Follow other user
mainRouter.post("/:username/Follows", middleware, follow);
// get user
mainRouter.get("/:username", middleware, getUser);
// get Follower list
mainRouter.get("/:username/Followers", getFollower);
mainRouter.get("/:username/Following", getFollowing);
mainRouter.delete("/:username/unfollow", middleware, unfollowUser);

module.exports = mainRouter;

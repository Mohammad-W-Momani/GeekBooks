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
} = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/Login", logIn);

mainRouter.get("/posts", middleware, UserPost);
mainRouter.get("/posts/:Post_id", post);
mainRouter.post("/posts", middleware, createPost);
mainRouter.put("/posts/:Post_id", middleware, updatePost);
mainRouter.delete("/posts/:Post_id", middleware, deletePost);

mainRouter.get("/groups", allGroup);
mainRouter.get("/groups/:group_id", Group);
mainRouter.post("/groups", createGroup);
mainRouter.put("/groups/:group_id", updateGroup);
mainRouter.delete("/groups/:group_id", deleteGroup);

mainRouter.post("/comments", middleware, createComment);
mainRouter.put("/comments/:comment_id", middleware, updateComment);
mainRouter.delete("/comments/:comment_id", middleware, deleteComment);

module.exports = mainRouter;

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

mainRouter.get("/posts", middleware, allPosts);
mainRouter.get("/posts/:Post_id",middleware, post);
mainRouter.post("/posts", middleware, createPost);
mainRouter.put("/posts/:Post_id", middleware, updatePost);
mainRouter.delete("/posts/:Post_id", middleware, deletePost);

mainRouter.get("/groups", middleware, allGroup);
mainRouter.get("/groups/:group_id", middleware, Group);
mainRouter.post("/groups", middleware, createGroup); 
mainRouter.put("/groups/:group_id", middleware, updateGroup);
mainRouter.delete("/groups/:group_id", middleware, deleteGroup); 

mainRouter.post("/comments", middleware, createComment);
mainRouter.put("/comments/:comment_id", middleware, updateComment);
mainRouter.delete("/comments/:comment_id", middleware, deleteComment);
module.exports = mainRouter;
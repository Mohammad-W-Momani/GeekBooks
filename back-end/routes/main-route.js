const express = require("express");
require("dotenv").config();
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
const { logIn, register, Home } = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, Home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/Login", logIn);

module.exports = mainRouter;

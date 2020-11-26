const signIn = require("../userAccess/LogIn");
const signUp = require("../userAccess/signup");
// sign up
const register = signUp;
//Login
const logIn = signIn;
const Home = (req, res) => {
  res.json("Welcome To Your Market");
};
module.exports = {
  logIn,
  register,
  Home,
};

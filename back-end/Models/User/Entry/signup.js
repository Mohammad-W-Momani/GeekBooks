const bcrypt = require("bcrypt");
const connection = require("../../../db");
const passwordChecking = (password) => {
  let passStrength = 0;
  const [upperLetter, lowerLetter, symbol, number] = [
    /[A-Z]/g,
    /[a-z]/g,
    /[.,!,@,#,$,%,^,&,*,?,_,~,-,(,), ]/g,
    /[0-9]/g,
  ];
  const [
    upperLetterChecker,
    lowerLetterChecker,
    symbolChecker,
    numberChecker,
  ] = [
    password.match(upperLetter),
    password.match(lowerLetter),
    password.match(symbol),
    password.match(number),
  ];
  if (password.length >= 8) {
    passStrength += 1;
  } else {
    return false;
  }
  if (password.length >= 12) {
    passStrength += 1;
  }
  if (upperLetterChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (lowerLetterChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (symbolChecker !== null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (numberChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (passStrength >= 5) {
    return true;
  } else {
    return false;
  }
};
const signUp = async (req, res) => {
  const user = req.body;
  if (user.password.length < 8) {
    res.json("Password must be greater than 8");
    return;
  }
  if (user.phone.length < 10) {
    res.json("Invalid Phone Number");
    return;
  }
  if (!passwordChecking(user.password)) {
    res.json(
      "Your password must contain a number, upper & lower letter, NO whitespace, No symbol "
    );
    return;
  }
  bcrypt.hash(user.password, Number(process.env.SALT), (err, hash) => {
    if (err) throw err;
    user.password = hash;
    user.role_id = 2;
    user.id = null;
    const query = `INSERT INTO User(user_id,username,email,password,phone,role_id) VALUES (?, ?, ?, ?, ?, ?)`;
    const data = [
      user.user_id,
      user.username,
      user.email,
      user.password,
      user.phone,
      user.role_id,
    ];
    connection.query(query, data, (err, results) => {
      if (err) {
        if (err.sqlMessage.indexOf("User.email") !== -1) {
          res.json("email is already used");
          return;
        } else if (err.sqlMessage.indexOf("User.phone") !== -1) {
          res.json("phone number is already used");
          return;
        } else {
          res.json("username is already used");
          return;
        }
      }
      res.json("User Has Been Created Successfully ");
      return;
    });
  });
};
module.exports = signUp;

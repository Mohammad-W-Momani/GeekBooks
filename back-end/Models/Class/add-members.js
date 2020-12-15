const connection = require("../../db");
const addMembers = (req, res) => {
  const { class_name } = req.params;
  const newUser = [req.body.username, class_name];
  const data = [req.body.username, class_name, req.token.username];
  const checkUser = `SELECT * FROM Members WHERE username =? AND class_name= ?`;
  const query = `INSERT INTO Members (username,class_name,adder_name) VALUES  (?,?,?)`;
  connection.query(checkUser, newUser, (err, result) => {
    if (err) throw err.sqlMessage;
    if (!result.length) {
      connection.query(query, data, (err, result) => {
        if (err) throw err.sqlMessage;
        if (result)
          res.json(
            req.body.username + " has been added by " + req.token.username
          );
      });
    } else {
      res.json(req.body.username + " is already member in " + class_name);
    }
  });
};
module.exports = addMembers;

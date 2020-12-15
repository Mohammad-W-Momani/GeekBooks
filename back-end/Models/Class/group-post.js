const connection = require("../../db");
const getGroupPosts = (req, res) => {
  const { class_name } = req.params;
  const data = [req.token.username, class_name];
  const checkUser = `SELECT * FROM Members WHERE username=? AND class_name =?`;
  const query = "SELECT * FROM Post WHERE class_name = ?";
  connection.query(checkUser, data, (err, userExist) => {
    if (err) throw err.sqlMessage;
    if (userExist.length) {
      connection.query(query, class_name, (err, results) => {
        if (err) throw err.sqlMessage;
        if (results.length) {
          res.json(results);
          return;
        }
        res.json("No post yet, Want to add one? ");
        return; // to fix this bug "Cannot set headers after they are sent to the client"
      });
    } else {
      res.json("Join Group first");
      return;
    }
  });
};
module.exports = getGroupPosts;

//the class_name line is looking if the post has been posted
// on group's page or on user's page
const connection = require("../../db");
const addPost = (req, res) => {
  const { class_name } = req.params;
  const data = [null, req.body.post, req.token.username, class_name];
  const userData = [req.token.username, class_name];
  const query = `INSERT INTO Post (post_id,post,username,class_name) VALUES (?,?,?,?)`;
  const checkUser = `SELECT * FROM Members WHERE username= ? AND class_name = ?`;
  if (class_name !== undefined) {
    connection.query(checkUser, userData, (err, userExist) => {
      if (err) throw err.sqlMessage;
      if (userExist.length) {
        connection.query(query, data, (err, results) => {
          if (err) throw err.sqlMessage;
          res.json(req.body.post);
        });
      } else {
        res.json("You're not member in this group");
      }
    });
  } else {
    connection.query(query, data, (err, results) => {
      if (err) throw err.sqlMessage;
      res.json(req.body.post);
    });
  }
};
module.exports = addPost;

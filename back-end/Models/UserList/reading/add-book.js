const connection = require("../../../db");
const reading = (req, res) => {
  const data = [null, req.body.book_id, req.token.user_id];
  const userList = [req.body.book_id, req.token.user_id];
  const checkBook = `SELECT * FROM User_List WHERE reading =? and user_id = ?`;
  const query = `INSERT INTO User_List(user_list_id , reading,user_id) VALUES (?,?,?)`;
  connection.query(checkBook, userList, (err, bookExist) => {
    if (err) throw err.sqlMessage;
    if (bookExist.length) {
      res.json("the Book is already exist");
      return;
    }
    connection.query(query, data, (err, result) => {
      if (err) throw err.sqlMessage;
      res.json("The book has been added to reading list");
    });
  });
};
module.exports = reading;

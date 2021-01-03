const connection = require("../../../db");
const removeToReadBook = (req, res) => {
  const data = [null, req.body.book_id, req.token.user_id];
  const userList = [req.body.book_id, req.token.user_id];
  const checkBook = `SELECT * FROM User_List WHERE to_read =? and user_id = ?`;
  const query = `DELETE FROM User_List WHERE user_list_id =? AND to_read =? AND user_id=?`;
  connection.query(checkBook, userList, (err, bookExist) => {
    if (err) throw err.sqlMessage;
    if (bookExist.length) {
      connection.query(query, data, (err, result) => {
        if (err) throw err.sqlMessage;
        res.json("The book has been deleted from Want To Read list");
        return;
      });
    }
  });
};
module.exports = removeToReadBook;

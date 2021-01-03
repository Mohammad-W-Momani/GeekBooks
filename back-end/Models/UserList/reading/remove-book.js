const connection = require("../../../db");
const removeReadingBook = (req, res) => {
  const data = [null, req.body.book_id, req.token.user_id];
  const userList = [req.body.book_id, req.token.user_id];
  const checkBook = `SELECT * FROM User_List WHERE reading =? and user_id = ?`;
  const query = `DELETE FROM User_List WHERE user_list_id =? AND reading =? AND user_id=?`;
  connection.query(checkBook, userList, (err, bookExist) => {
    if (err) throw err.sqlMessage;
    if (bookExist.length) {
      connection.query(query, data, (err, result) => {
        if (err) throw err.sqlMessage;
        res.json("The book has been deleted from Reading list");
        return;
      });
    }
  });
};
module.exports = removeReadingBook;

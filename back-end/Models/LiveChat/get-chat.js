const connection = require("../../db");
const liveChat = (req, res) => {
  const sender = [req.token.username, req.params.username]; //checking from first user
  const receiver = [req.params.username, req.token.username]; //checking from second user
  const query = `SELECT * FROM Live_Chat WHERE sender=? AND receiver = ?`;
  connection.query(query, sender, (err, results) => {
    if (err) throw err.sqlMessage;
    if (results.length) {
      const { chat_id } = results[0];
      const query = `SELECT * FROM Live_Chat WHERE chat_id=?`;
      connection.query(query, chat_id, (err, results) => {
        if (err) throw err.sqlMessage;
        res.json(results);
        return;
      });
    } else {
      connection.query(query, receiver, (err, chat) => {
        if (err) throw err.sqlMessage;
        if (chat.length) {
          const { chat_id } = chat[0];
          const query = `SELECT * FROM Live_Chat WHERE chat_id=?`;
          connection.query(query, chat_id, (err, results) => {
            if (err) throw err.sqlMessage;
            res.json(results);
          });
        }
      });
    }
  });
};
module.exports = liveChat;

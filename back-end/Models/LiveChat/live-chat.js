const connection = require("../../db");
const { v4 } = require("uuid");
const liveChat = (req, res) => {
  const sender = [req.token.username, req.params.username]; //checking from first user
  const receiver = [req.params.username, req.token.username]; //checking from second user
  const chatQuery = `SELECT * FROM Live_Chat WHERE sender=? AND receiver = ?`;
  connection.query(chatQuery, sender, (err, result) => {
    if (err) throw err.sqlMessage;
    if (result.length) {
      const senderData = [
        req.token.username,
        req.params.username,
        req.body.message,
        result[0].chat_id,
      ];
      const query = `INSERT INTO Live_Chat(sender,receiver,message,chat_id) VALUES (?,?,?,?)`;
      connection.query(query, senderData, (err, results) => {
        if (err) throw err;
        res.json(req.body.message);
      });
    } else {
      connection.query(chatQuery, receiver, (err, ChatId) => {
        if (err) throw err.sqlMessage;
        if (ChatId.length) {
          const receiverData = [
            req.token.username,
            req.params.username,
            req.body.message,
            ChatId[0].chat_id,
          ];
          const query = `INSERT INTO Live_Chat(sender,receiver,message,chat_id) VALUES (?,?,?,?)`;
          connection.query(query, receiverData, (err, results) => {
            if (err) throw err;
            res.json(req.body.message);
            return;
          });
        } else {
          const chat_id = v4();
          const data = [
            req.token.username,
            req.params.username,
            req.body.message,
            chat_id,
          ];
          const query = `INSERT INTO Live_Chat(sender,receiver,message,chat_id) VALUES (?,?,?,?)`;
          connection.query(query, data, (err, results) => {
            if (err) throw err;
            res.json(req.body.message);
            return;
          });
        }
      });
    }
  });
};
module.exports = liveChat;

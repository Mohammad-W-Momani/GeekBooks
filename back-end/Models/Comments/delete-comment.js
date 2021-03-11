const connection = require("../../db");
const deleteComment = (req, res) => {
    const { username, user_id } = req.token;
    const { class_name, comment_id } = req.params;
    const checkRole = `SELECT username FROM Comment WHERE comment_id =? `;
    connection.query(checkRole, comment_id, (err, user) => {
        if (err) throw err.sqlMessage;
        if (user[0].username === username && class_name === undefined) {
            const query = `DELETE FROM Comment WHERE comment_id=?`;
            connection.query(query, comment_id, (err, result) => {
                if (err) throw err.sqlMessage;
                res.json("the comment has deleted successfully");
            });
        } else if (class_name !== undefined && user[0].username === username) {
            const checkClass = `SELECT user_id FROM Class WHERE class_name =?`;
            connection.query(checkClass, class_name, (err, group) => {
                if (err) throw err.sqlMessage;
                if (group[0].user_id === user_id || user[0].username === username) {
                    const query = `DELETE FROM Comment WHERE comment_id=?`;
                    connection.query(query, comment_id, (err, result) => {
                        if (err) throw err.sqlMessage;
                        res.json("the comment has deleted successfully");
                    });
                }
            });
        } else {
            res.json("You cannot delete this comment");
        }
    });
};
module.exports = deleteComment;
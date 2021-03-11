const connection = require("../../db");
const deletePost = (req, res) => {
    const { username, user_id } = req.token;
    const { post_id, class_name } = req.params;
    const checkRole = `SELECT username FROM Post WHERE post_id =? `;
    connection.query(checkRole, post_id, (err, user) => {
        console.log(user[0].username);
        if (err) throw err.sqlMessage;
        if (user[0].username === username && class_name === undefined) {
            const query = `DELETE FROM Post WHERE post_id=?`;
            connection.query(query, post_id, (err, result) => {
                if (err) throw err.sqlMessage;
                res.json("the post has deleted successfully");
            });
        } else if (class_name !== undefined && user[0].username === username) {
            const checkClass = `SELECT user_id FROM Class WHERE class_name =?`;
            connection.query(checkClass, class_name, (err, group) => {
                if (err) throw err.sqlMessage;
                if (group[0].user_id === user_id || user[0].username === username) {
                    const query = `DELETE FROM Post WHERE post_id=?`;
                    connection.query(query, post_id, (err, result) => {
                        if (err) throw err.sqlMessage;
                        res.json("the post has deleted successfully");
                    });
                }
            });
        } else {
            res.json("You cannot delete this post");
        }
    });
};
module.exports = deletePost;
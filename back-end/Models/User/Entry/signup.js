const bcrypt = require("bcrypt");
const connection = require("../../../db");

const signUp = async(req, res) => {
    const user = req.body;
    bcrypt.hash(user.password, Number(process.env.SALT), (err, hash) => {
        if (err) throw err;
        user.password = hash;
        user.role_id = 2;
        user.id = null;
        const query = `INSERT INTO User(user_id,username,email,password,phone,role_id) VALUES (?, ?, ?, ?, ?, ?)`;
        const data = [
            user.user_id,
            user.username,
            user.email,
            user.password,
            user.phone,
            user.role_id,
        ];
        connection.query(query, data, (err, results) => {
            if (err) {
                if (err.sqlMessage.indexOf("user.email") !== -1) {
                    res.json("email is already used");
                    return;
                } else if (err.sqlMessage.indexOf("user.phone") !== -1) {
                    res.json("phone number is already used");
                    return;
                } else {
                    res.json("username is already used");
                    return;
                }

            }
            res.json("User Has Been Created Successfully");
            return;
        });
    });
};
module.exports = signUp;
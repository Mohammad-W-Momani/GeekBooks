const connection = require('../../db');
require('dotenv').config();

//Add new comment
const addComment=(req,res)=>{
  let sql = "INSERT INTO comment SET ?";
  let comment = req.body.comment;
  connection.query(sql, comment,(err, results) => {
    if(err) throw err;
    res.json( results);
  });
}

//Update comment
const updateCommentById=(req,res)=>{
  let comment = req.body.comment
  let commentID = req.params.comment_id
  let sql = `UPDATE comment SET comment=? WHERE comment_id=?`;
  connection.query(sql,comment,commentID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
}

//Delete comments
const deleteCommentsById=(req,res)=>{

  let commentID = req.params.comment_id
  let sql = `DELETE FROM comment WHERE comment_id=?`;
  connection.query(sql,commentID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
}

module.exports={
  addComment,
  updateCommentById,
  deleteCommentsById
}


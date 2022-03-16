const express = require("express");
const router = express.Router();
const mysqlConnection = require('../database');

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/:u", async (req, res) => {

  const { u } = req.params;

  if( u != null ){

    try {
      mysqlConnection.query('SELECT posts.id, posts.name,posts.subtitulo,posts.body,images.url,categories.nombre FROM posts INNER JOIN categories ON categories.id = posts.category_id INNER JOIN images ON images.imageable_id = posts.id WHERE posts.user_id = ' + u , (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
              console.log(err);
        }
    });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    } 
  } 
  
});
router.get('/:id/:u', (req, res) => {

  const { id } = req.params;
  const { u } = req.params;

  mysqlConnection.query('SELECT * FROM posts WHERE id=? AND user_id = ?' ,[id, u],(err, rows,fields) =>{
      if(!err){
          console.log(id);
          res.json(rows[0]);
      } else {
            console.log(err);
      }
  });
});

module.exports = router;

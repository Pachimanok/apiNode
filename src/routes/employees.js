const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/',(req, res ) => {
    mysqlConnection.query('SELECT * FROM posts', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
              console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {

    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM posts WHERE id=?',[id],(err, rows,fields) =>{
        if(!err){
            console.log(id);
            res.json(rows[0]);
        } else {
              console.log(err);
        }
    });
});

module.exports = router;
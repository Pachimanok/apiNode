const express = require("express");
const router = express.Router();
const mysqlConnection = require('../database');

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM posts', (err, rows, fields) => {
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
});

module.exports = router;

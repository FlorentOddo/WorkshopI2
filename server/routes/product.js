const { database_connection } = require('../database_connection');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection(database_connection)

connection.connect((err) => {
  if (err) throw err
  console.log('You are now connected...')
})

//const connection = mysql.createConnection(database_config);

router.get(`/:id`, function(req, res, next) {
  var id = req.params.id;
  connection.query(`SELECT * FROM product WHERE idproduct = ${id}`, (err, result) => {
    if (err) throw err;
    console.log(result);
  })

  console.log("test");
  console.log(id);
  res.send('respond product ' + id);
});

module.exports = router;
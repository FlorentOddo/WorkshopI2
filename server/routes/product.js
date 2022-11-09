const { database_connection } = require('../database_connection');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection(database_connection)

connection.connect((err) => {
  if (err) throw err
  console.log('You are now connected to the dabase')
})

router.get(`/:id`, function(req, res, next) {
  var id = req.params.id;
  connection.query(`SELECT * FROM product WHERE idproduct = ${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

router.post(`/name`, function(req, res, next) {
  var name = req.body.name;
  connection.query(`SELECT * FROM product WHERE UPPER(name) LIKE UPPER("%${name}%")`, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

module.exports = router;
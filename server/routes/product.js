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

router.post(`/name`, function(req, res, next) {
  var name = req.body.name;
  connection.query(`SELECT * FROM product WHERE name LIKE "%${name}%"`, (err, result) => {
    if (err) throw err;
    console.log(result);
  })

  console.log("test");
  console.log(name);
  res.send('respond product ' + name);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

import database_config from '../database_config'
const connection = mysql.createConnection(database_config);

router.get(`/product/${id}`, function(req, res, next) {
  connection.connect((err) => {
    if (err) throw err
    console.log('You are now connected...')
  })
  connection.query(`SELECT ${id} FROM product`, (err, result) => {
    if (err) throw err
    console.log(result);
  })
});
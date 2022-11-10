const { database_connection } = require('../database_connection');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection(database_connection);
const fs = require("fs");
const { parse } = require("csv-parse");
const csvFilterSort = require('csv-filter-sort');


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
  connection.query(`SELECT * FROM product WHERE UPPER(name) LIKE UPPER("%${name}%")`,function(err, result){
    if (err) throw err;

    if(result == ""){
      res.send("");
      return;
    }  
    
     result.forEach( function(element, idx, array){ 
      fs.createReadStream("./data/Agribalyse_Synthese.csv")
      .pipe(parse({ delimiter: ",", from_line: 2}))
      .on("data", function (row) {
        const headers = Object.keys(row);
        if(Number(row[headers[0]]) == element.code_agb){
          element.ecoscore = row[headers[11]];
          element.groupe = row[headers[3]];
        }
      }).on("end", function(){
        if (idx === array.length - 1){ 
          res.send(result); 
        }
      })
    });




    /*
    var filter = new Promise(async (resolve, reject) => {
      console.log("test");
      await result.forEach( async element => {
        await fs.createReadStream("./data/Agribalyse_Synthese.csv")
        .pipe(parse({ delimiter: ",", from_line: 2}))
        .on("data", function (row) {
          const headers = Object.keys(row);
          if(Number(row[headers[0]]) == element.code_agb){
            console.log("test 86748");
            element.agri = {"groupe":row[headers[2]],
                            "sous-groupe":row[headers[3]]};
          }
        })
        resolve();
      })
    });

    result.async

    await filter.then(() => {
      console.log("test 8");
      res.send(result);
      return;
    });
    */
    
  })

});


module.exports = router;
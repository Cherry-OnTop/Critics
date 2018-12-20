const express = require('express');
const mysql = require('mysql');
const connection = require('../database/index.js');
const port = 9003
const app = express();

app.use(express.static(__dirname + 'client'));

app.get('/movies/:number', (req, res) => {
    const movieId = req.params.number;
    connection.query(`select * from reviews r inner join critics c on r.criticId = c.id where r.movieId = ${movieId}`, (err , results) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    })
})

app.listen(port, (err) => {
    if(err) {
        console.log('Failure connecting to server')
    } else {
       console.log(`Listening on port ${port}!`) 
    }
  });
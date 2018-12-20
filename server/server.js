const express = require('express');
const mysql = require('mysql');
const connection = require('../database/index.js');
const port = 9003
const app = express();
const router = require('../router/router.js')

app.use(express.static(__dirname + 'client'));

app.use('/', router);


app.listen(port, (err) => {
    if(err) {
        console.log('Failure connecting to server')
    } else {
       console.log(`Listening on port ${port}!`) 
    }
  });
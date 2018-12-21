const express = require('express');
const mysql = require('mysql');
const connection = require('../database/index.js');
const port = 9003;
const app = express();
const router = require('../router/router.js');
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/movies', router);

app.listen(port, (err) => {
    if(err) {
        console.log('Failure connecting to server')
    } else {
       console.log(`Listening on port ${port}!`) 
    }
  });
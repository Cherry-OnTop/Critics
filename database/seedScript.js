var fs = require('fs');
var mysql = require('mysql');
var connection = require('./index.js');

 var dataInsertCritics = function(){
    fs.readFile('critics.json', 'utf8', (err, data)=> {
        if(err) {
            console.log('Error importing data', err)
        } else {
            var critic = JSON.parse(data);
            for (var i = 0; i < critic[i].lenght; i++) {
                connection.query(`INSERT INTO \`critics\` (name, topCritic, publisher, picture) VALUES (?,?,?,?);`, [critic[i].firstname, critic[i].topCritic, critic[i].publisher, critic[i].picture], function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log('Saved!')
        }
    })
            }
        }
    });
 }
 dataInsertCritics();
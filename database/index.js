var mysql = require('mysql');
var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'FEC'
});
 
connection.connect((err) => {
    if(err) {
        console.log('Error connecting to database', err)
    } else {
        console.log('Database connection successful')
    }
});

module.exports = connection;
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'localhost',
  user     : 'root',
  password : process.env.PASS,
  database : 'FEC'

});

connection.connect(err => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Database connection successful");
  }
});

module.exports = connection;

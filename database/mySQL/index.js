var mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'localhost', // when deploying change this to a process.env
  user     : 'root', // when deploying change this to a process.env
  password : process.env.PASS,
  database : 'FEC' //should be SDC but leaving it like this for now
});

connection.connect(err => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Database connection successful");
  }
});

module.exports = connection;

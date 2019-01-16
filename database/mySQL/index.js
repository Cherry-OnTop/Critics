var mysql = require("mysql");
var connection = mysql.createConnection({
  multipleStatements: true,
  host: process.env.db_host, // when deploying change this to a process.env
  user     : process.env.db_user, // when deploying change this to a process.env
  password : process.env.db_pass,
  database : process.env.db_name //should be SDC but leaving it like this for now
});

connection.connect(err => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Database connection successful");
  }
});

module.exports = connection;

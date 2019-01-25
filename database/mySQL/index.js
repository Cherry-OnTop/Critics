var mysql = require("mysql");
var connection = mysql.createConnection({
  multipleStatements: true,
  host: process.env.db_host, 
  user: process.env.db_user, 
  password: process.env.db_pass,
  database: process.env.db_name
});

connection.connect(err => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Database connection successful");
  }
});

module.exports = connection;

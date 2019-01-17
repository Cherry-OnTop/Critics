var mysql = require("mysql");
var connection = mysql.createConnection({
  multipleStatements: true,
  host: "18.221.65.191", // when deploying change this to a process.env
  user: "root", // when deploying change this to a process.env
  password: "hackPlease1",
  database: "sdc", //should be SDC but leaving it like this for now
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Database connection successful");
  }
});

module.exports = connection;

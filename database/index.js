var mysql = require("mysql");
var connection = mysql.createConnection({
  host: '35.245.79.220',
  user     : 'root',
  password : process.env.dbpassword,
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

const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017/';
 
// Use connect method to connect to the server
module.exports.connect = function connect(callback) {
    MongoClient.connect(url, function(err, conn){
        /* exports the connection */
        console.log('Connection to mongoDB successful');
        module.exports.db = conn;
        callback(err);
    });
};
var fs = require('fs');
var connection = require('./index.js');

function populateCritics(database) {
    if (database === 'mySQL') {
        connection.query(`LOAD DATA LOCAL INFILE 'critics.csv' INTO TABLE critics fields terminated BY "|" lines terminated BY "\n" IGNORE 1 LINES (name,topCritic,picture,publisher);`, (err, results) => {
            if (err) {
                console.log('There was an error querying the critics in the db: ', err);
            } else {
                console.log(results);
            }
        });
    } else if (database === 'mongoDB') {

    }
    // var stream = fs.createReadStream('critics.json');
    // stream.on('finish', () => {
    //     console.log('Finished handling data');
    // });
    // //var leftoverChunk = 
    // stream.on('data', (chunk) => {
    //     console.log(chunk.toString());
    // });
    // stream.on('error', (err) => {
    //     console.log('Error in read-stream for critics: ', err);
    // })
}
//populateCritics('mySQL');

function populateReviews() {
    connection.query(`LOAD DATA LOCAL INFILE 'reviews.csv' INTO TABLE reviews fields terminated BY "|" lines terminated BY "\n" IGNORE 1 LINES (criticId,text,rating,movieId,date);`, (err, results) => {
        if (err) {
            console.log('There was an error querying the critics in the db: ', err);
        } else {
            console.log(results);
        }
    });
}
populateReviews('mySQL');

// function readFile(path, callback) {
//     fs.readFile(path, 'utf8', function (err, data) {
//       if (err) {
//         callback(err, null);
//       } else {
//         var dataobj = JSON.parse(data);
//         callback(null, dataobj);
//       }
//     });
// }

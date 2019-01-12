var fs = require('fs');
var connection = require('./index.js');

function populateCritics() {
    connection.query(`LOAD DATA LOCAL INFILE 'oldCritics.csv' INTO TABLE critics FIELDS TERMINATED BY ',' (name,picture,topCritic,publisher);`, (err, results) => {
        if (err) {
            console.log('There was an error querying the critics in the db: ', err);
        } else {
            console.log(results);
        }
    });
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
populateCritics();

function populateReviews() {

}
//populateReviews();

// function readFile(path, callback) { //change this to a stream
//     fs.readFile(path, 'utf8', function (err, data) {
//       if (err) {
//         callback(err, null);
//       } else {
//         var dataobj = JSON.parse(data);
//         callback(null, dataobj);
//       }
//     });
// }

// function populateCritics(typeOfDB) {
    // readFile('critics.json', (err, data) => {
    //     if (err) {
    //         console.log('There was an error collecting critics data: ', err);
    //     } else {
    //         var dataInArray = [];
    //         for (let k = 0; k < data.length; k++) {
    //             var aCritic = [];
    //             for (let key in data[k]) {
    //                 aCritic.push(data[k][key]);
    //             }
    //             dataInArray.push(aCritic);
    //         }
    //         connection.query("INSERT INTO critics (name, topCritic, publisher, picture) VALUES ?;", [dataInArray], (err, results)=>{
    //             if (err) {
    //                 
    //             } else {
    //                 console.log(results);
    //             }
    //         })
    //     }
    // });
    //load json into mysql
    //if 'typeOfDB === '' ' { run script for this type } else { run script for other type }
// }
// populateCritics();

            // var batch = [];
            // var randomNumberOfReviews = Math.floor(Math.random() * 20) + 1;
            // for (let i = 0; i < 20; i++) {
            //     batch.push(data[(Math.random() * 10000) + 1]);
            // }
        
//  var dataInsertCritics = function(){
//     fs.readFile(__dirname+'/critics.json','utf-8', (err, data)=> {
//         if(err) {
//             console.log('Error importing data', err)
//         } else {
//             var critics = JSON.parse(data);
//             for (var i = 0; i < critic.length; i++) {
//                 connection.query(`INSERT INTO \`critics\` (name, topCritic, publisher, picture) VALUES (?,?,?,?);`, [critic[i].name, Number(critic[i].topCritic), critic[i].publisher, critic[i].picture], function(err) {
//                         if(err) {
//                             console.log('Error saving to database', err)
//                         } else {
//                             console.log('Saved!')
//                         }
//                     })
//             }
//         }
//     });
//  }
    // var dataInsertReviews = function(){
    //     fs.readFile(__dirname+'/reviews.json','utf-8', (err, data)=> {
    //         if(err) {
    //             console.log('Error importing data', err)
    //         } else {
    //             var review = JSON.parse(data);
    //             for (var i = 0; i < review.length; i++) {
    //                 connection.query(`INSERT INTO \`reviews\` (criticId, text, rating, movieId, date) VALUES (?,?,?,?,?);`, [review[i].criticId, review[i].text, review[i].rating, review[i].movieId, review[i].date], function(err) {
    //                     if(err) {
    //                         console.log('Error saving to database', err)
    //                     } else {
    //                         console.log('Saved!')
    //                     }
    //                 })
    //             }
    //         }
    //     });
    // }
 //dataInsertCritics();
 //dataInsertReviews();

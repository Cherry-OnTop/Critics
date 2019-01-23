var mySQLConnection = require('./mySQL/index.js');
function populateCritics(dbms) {
    // if (dbms === 'mySQL') {
    console.time('10 Million Critics: ');
    mySQLConnection.query(`
    SET bulk_insert_buffer_size = 1024 * 1024 * 1024;
    SET unique_checks=0;
    SET foreign_key_checks=0;
    SET sql_log_bin = 0;
    LOAD DATA LOCAL INFILE 'data/critics.csv' INTO TABLE critics fields terminated BY "|" lines terminated BY "\n" IGNORE 1 LINES (name,topCritic,picture,publisher);
    SET unique_checks=1;
    SET foreign_key_checks=1;
    SET sql_log_bin = 1;
    `, (err, results) => {
        if (err) {
            console.log('There was an error querying the db: ', err);
        } else {
            console.log('Results of uploading csv to mySQL: ', results);
            console.timeEnd('10 Million Critics: ');
            mySQLConnection.end();
        }
    });
    // } else if (dbms === 'mongoDB') {
    //     var exec = require('child_process').exec;
    //     var mongoDBConnection = require('./mongo/index.js');
    //     mongoDBConnection.connect(function(err) {
    //         if(err) {
    //             console.log('Error connecting to the db: ', err);
    //             return;
    //         }
    //         exec('mongoimport -d sdc -c critics --type csv --headerline --file ./data/critics.csv', (err) => {
    //             if(err) {`  `
    //                 console.log('Error seeding data into mongodb: ', err);
    //             }
    //         });
    //     });
    // }
}

function populateReviews(dbms) {
    // if (dbms === 'mySQL') {
    console.time('1 Million Reviews: ');
    mySQLConnection.query(`
    SET bulk_insert_buffer_size = 1024 * 1024 * 1024;
    SET unique_checks=0;
    SET foreign_key_checks=0;
    SET sql_log_bin = 0;
    LOAD DATA LOCAL INFILE 'data/reviews.csv' INTO TABLE reviews fields terminated BY "|" lines terminated BY "\n" IGNORE 1 LINES (criticId,text,rating,movieId,date);
    SET unique_checks=1;
    SET foreign_key_checks=1;
    SET sql_log_bin = 1;
    `, (err, results) => {
        if (err) {
            console.log('There was an error querying the db: ', err);
        } else {
            console.log('Adding to the database results: ', results);
            console.timeEnd('1 Million Reviews: ');
            mySQLConnection.end();
        }
    });
    //}
    // } else if (dbms === 'mongoDB') {
    //     var exec = require('child_process').exec;
    //     var mongoDBConnection = require('./mongo/index.js');
    //     mongoDBConnection.connect(function(err) {
    //         if(err) {
    //             console.log('Error connecting to the db: ', err);
    //             return;
    //         }
    //         exec('mongoimport -d sdc -c reviews --type csv --headerline --file ./data/reviews.csv', (err) => {
    //             if(err) {
    //                 console.log('Error seeding data into mongodb: ', err);
    //             }
    //         });
    //     });
    // }
}

// function addMovieIndex() { //takes too long
//     console.time('Indexing: ');
//     mySQLConnection.query('ALTER TABLE `reviews` ADD INDEX `movieIndex` (`movieId`);', (err, results) => {
//         if (err) {
//             console.log('There was an error indexing the movies in the db: ', err);
//         } else {
//             console.log('Indexing movieId: ', results);
//             mySQLConnection.query('ALTER TABLE `reviews` ADD FOREIGN KEY (criticId) REFERENCES `critics` (`id`);', (err, results) => {
//                 if (err) {
//                     console.log('There was an error foreign key the critics in reviews: ', err);
//                 } else {
//                     console.log('Results of foreign keying the critics in reviews: ', results);
//                     console.timeEnd('Indexing: ');
//                     mySQLConnection.end();
//                 }
//             });
//         }
//     });
// }

//'mySQL' or 'mongoDB' for the dbms arugment
//populateCritics('mySQL');
populateReviews(); //after final population make sure to add index: ADD INDEX movieIndex on reviews(moveId);, 180 in table is max
//addMovieIndex();
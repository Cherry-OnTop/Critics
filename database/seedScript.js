function populateCritics(dbms) {
    if (dbms === 'mySQL') {
        var mySQLConnection = require('./mySQL/index.js');
        mySQLConnection.query(`SET bulk_insert_buffer_size = 1024 * 1024 * 1024;`, (err, results) => {
            if (err) {
                console.log('There was an error setting buffer size: ', err);
                return;
            }
            console.log('Results of setting buffer size: ', results);
            mySQLConnection.query(`LOAD DATA LOCAL INFILE 'data/critics.csv' INTO TABLE critics fields terminated BY "|" lines terminated BY "\n" IGNORE 1 LINES (name,topCritic,picture,publisher);`, (err, results) => {
                if (err) {
                    console.log('There was an error querying the critics in the db: ', err);
                } else {
                    console.log('Results of uploading csv to mySQL: ', results);
                }
            });
        });
    } else if (dbms === 'mongoDB') {
        var exec = require('child_process').exec;
        var mongoDBConnection = require('./mongo/index.js');
        mongoDBConnection.connect(function(err) {
            if(err) {
                console.log('Error connecting to the db: ', err);
                return;
            }
            exec('mongoimport -d sdc -c critics --type csv --headerline --file ./data/critics.csv', (err) => {
                if(err) {`  `
                    console.log('Error seeding data into mongodb: ', err);
                }
            });
        });
    }
}

function populateReviews(dbms) {
    if (dbms === 'mySQL') {
        var mySQLConnection = require('./mySQL/index.js');
        mySQLConnection.query(`SET bulk_insert_buffer_size = 1024 * 1024 * 1024;`, (err, results) => {
            if (err) {
                console.log('Error setting buffer size for reviews query: ', err);
                return;
            }
            console.log('Results of setting buffer size for reviews query: ', results);
            mySQLConnection.query(`LOAD DATA LOCAL INFILE 'data/reviews.csv' INTO TABLE reviews fields terminated BY "|" lines terminated BY "\n" IGNORE 1 LINES (criticId,text,rating,movieId,date);`, (err, results) => {
                if (err) {
                    console.log('There was an error querying the critics in the db: ', err);
                } else {
                    console.log('Results of uploading reviews csv to mySQL: ', results);
                }
            });
        });

    } else if (dbms === 'mongoDB') {
        var exec = require('child_process').exec;
        var mongoDBConnection = require('./mongo/index.js');
        mongoDBConnection.connect(function(err) {
            if(err) {
                console.log('Error connecting to the db: ', err);
                return;
            }
            exec('mongoimport -d sdc -c reviews --type csv --headerline --file ./data/reviews.csv', (err) => {
                if(err) {
                    console.log('Error seeding data into mongodb: ', err);
                }
            });
        });
    }
}

//'mySQL' or 'mongoDB' for the dbms arugment
//populateCritics('mySQL');
populateReviews('mySQL');
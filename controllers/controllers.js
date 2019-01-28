const connection = require("../database/mySQL/index.js");
const redis = require("redis");

var client = redis.createClient('6379', '3.16.200.137');

exports.getReviews = function(req, res) {
  const movieId = req.params.number;

  client.get(movieId, (err, data) => {
    if (err) {
      console.log('Error checking redis cache: ', err);
    } else if (data) {
      console.log('Data in cache was found!: ', data);
      data = JSON.parse(data);
      res.send(data);
    } else if (!data) {
      connection.query(
        `select * from reviews r inner join critics c on r.criticId = c.id where r.movieId = ${movieId}`,
        (err, results) => {
          if (err) {
            res.sendStatus(500);
          } else {
            //console.log(results);
            client.setex(movieId, 60, JSON.stringify(results));
            res.send(results);
          }
        }
      );
    }
  })
};

const connection = require("../database/mySQL/index.js");

exports.getReviews = function(req, res) {
  const movieId = req.params.number;
  connection.query(
    `select * from reviews r inner join critics c on r.criticId = c.id where r.movieId = ${movieId}`,
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        //console.log(results);
        res.send(results);
      }
    }
  );
};

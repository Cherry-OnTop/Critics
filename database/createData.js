var fs = require("fs");
var faker = require("faker");

function writeData(path, data) {
  fs.appendFile(path, JSON.stringify(data), 'utf8', err => {
    if (err) {
        console.log("Error writing into the critics.json file", err);
        return;
    }
  });
}

// function removeFromBrackets(data) {
//   return data.substr(1).slice(0, -1);
// }

function generateCritics() {
  var newCritics = [];
  for (let i = 0; i < 10000; i++) {
    console.log("Percent done: " + i/100 + '%');

    let newCritic = {
    name: faker.name.findName(),
    topCritic: Math.round(Math.random()),
    publisher: faker.company.companyName(),
    picture: faker.image.avatar()
    };

    newCritics.push(newCritic);
  }
  fs.appendFile("critics.json", JSON.stringify(newCritics), 'utf8', err => {
      if (err) {
          console.log("Error writing into the critics.json file", err);
          return;
      }
  });
}

function generateReviews() {
  const filePath = fs.createWriteStream('reviews.json');
  function randomDate() {
    let date = "";
    date += Math.floor((Math.random() * 12) + 1) + "/";
    date += Math.floor((Math.random() * 28) + 1) + "/";
    date += Math.floor((Math.random() * 18) + 2000);
    return date;
  }
  //truncate the reviews file.
  //let newReviews = {};
  for (let k = 0; k < 100; k++) {
    console.log("Percent done: " + k + '%');
    let table = [];
    for (let i = 0; i < 200; i++) {
      let newReview = {
        criticId: Math.floor(Math.random() * 10000) + 1,
        text: faker.lorem.paragraph(),
        rating: Math.round(Math.random()),
        movieId: Math.floor((Math.random() * 10000000) + 1),
        date: randomDate()
      };
      //table.push(newReview);
      filePath.write(JSON.stringify(newReview));
    }
    //newReviews[`table${k}`] = table;
  }
  //writeData("reviews.json", newReviews);
  filePath.end();
}

//generateCritics();
generateReviews();
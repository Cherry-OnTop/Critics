var fs = require("fs");
var faker = require("faker");

function generateCritics() {
  const filePath = fs.createWriteStream('critics.json');
    filePath.on('finish', () => {
    console.log('Finished writing data');
  })
  filePath.write("[", 'utf8');
  for (let k = 0; k < 50; k++) {
    console.log('Percent Completed: ' + k*2 + '%');
    var batch = "";
    for (let i = 0; i < 200000; i++) { //max size of str?
      let newCritic = {
        name: faker.name.findName(),
        topCritic: Math.round(Math.random()),
        publisher: faker.company.companyName(),
        picture: faker.image.avatar()
      };

      if (k !== 49 || i !== 199999) {
          batch += (JSON.stringify(newCritic) + ',');
        } else {
          batch += (JSON.stringify(newCritic));
          filePath.write(batch + ']', 'utf8');
          filePath.end();
          return;
        }
    }
    filePath.write(batch, 'utf8');
  }
}

function generateReviews() {
  const filePath = fs.createWriteStream('reviews.json');
  filePath.on('finish', () => {
    console.log('Finished writing data');
  })
  function randomDate() {
    let date = "";
    date += Math.floor((Math.random() * 12) + 1) + "/";
    date += Math.floor((Math.random() * 28) + 1) + "/";
    date += Math.floor((Math.random() * 18) + 2000);
    return date;
  }
  filePath.write("[", 'utf8');
  for (let k = 0; k < 1000; k++) {
    console.log('Percent Completed: ' + k/10 + '%');
    var batch = "";
    for (let i = 0; i < 200000; i++) { //max size of string?
      let newReview = {
        criticId: Math.floor(Math.random() * 10000000) + 1,
        text: faker.lorem.words(15),
        rating: Math.round(Math.random()),
        movieId: Math.floor((Math.random() * 10000000) + 1),
        date: randomDate()
      };
      if (k !== 999 || i !== 199999) {
        batch += (JSON.stringify(newReview) + ',');
      } else {
        batch += (JSON.stringify(newReview));
        filePath.write(batch + ']', 'utf8');
        filePath.end();
        return;
      }
    }
    filePath.write(batch, 'utf8');
  }
}

function readReviews() {
  var rStream = fs.createReadStream('reviews.json');
    rStream.on('data', chunk =>
    console.log('data chunk', chunk.toString()) //somehow changes the data to chunks?
  )
}

function readCritics() {
  var rStream = fs.createReadStream('critics.json');
    rStream.on('data', chunk =>
    console.log('data chunk', chunk.toString()) //the chunks end anywhere in the string
  )
}

//generateCritics();
//generateReviews();

//readReviews();
//readCritics();
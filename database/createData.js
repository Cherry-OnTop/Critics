var fs = require("fs");
var faker = require("faker");

function generateCritics(path, fileType) {
  //could change filetype to just take whats after path's period and wrap some conditionals
  //to make sure it is properly formatted
  const filePath = fs.createWriteStream("./data/" + path);
  filePath.on("finish", () => {
    console.log("Finished writing data");
  });
  if (fileType === "csv") {
    filePath.write("name|topCritic|picture|publisher\n", "utf8");
    for (let k = 0; k < 50; k++) {
      console.log("Percent Completed: " + k * 2 + "%");
      var batch = "";
      for (let i = 0; i < 200000; i++) {
        //max size of string is 2^27 to be safe, therefore = 2^27 / maxBatchCharLen for least iterations
        var newCritic =
          faker.name.findName() +
          "|" +
          Math.round(Math.random()) +
          "|" +
          faker.image.avatar() +
          "|" +
          faker.company.companyName();
        if (k !== 49 || i !== 199999) {
          batch += newCritic + "\n"; //is there any benefit to splitting by lines in csv?
        } else {
          batch += newCritic;
        }
      }
      filePath.write(batch, "utf8");
    }
    filePath.end();
  } else if (fileType === "json") {
    filePath.write("[", "utf8");
    for (let k = 0; k < 50; k++) {
      console.log("Percent Completed: " + k * 2 + "%");
      var batch = "";
      for (let i = 0; i < 200000; i++) {
        //max size of string is 2^27 to be safe, therefore = 2^27 / maxBatchCharLen for least iterations
        let newCritic = {
          name: faker.name.findName(),
          topCritic: Math.round(Math.random()),
          publisher: faker.company.companyName(),
          picture: faker.image.avatar()
        };

        if (k !== 49 || i !== 199999) {
          batch += JSON.stringify(newCritic) + ",";
        } else {
          batch += JSON.stringify(newCritic);
          filePath.write(batch + "]", "utf8");
          json;
          filePath.end();
          return;
        }
      }
      filePath.write(batch, "utf8");
    }
  }
}

function generateReviews(path, fileType) {
  //could change filetype to just take whats after path's period and wrap some conditionals
  //to make sure it is properly formatted
  function randomDate() {
    let date = "";
    date += Math.floor(Math.random() * 12 + 1) + "/";
    date += Math.floor(Math.random() * 28 + 1) + "/";
    date += Math.floor(Math.random() * 18 + 2000);
    return date;
  }
  if (fileType === "csv") {
    for (let i = 1; i < 3; i++) {
      const filePath = fs.createWriteStream("./data/" + path + i + '.' + fileType);
      filePath.on("finish", () => {
        console.log("Finished writing data");
      });
      filePath.write("criticId|text|rating|movieId|date\n", "utf8");
      for (let k = 0; k < 50; k++) {
        console.log("File " + path + i + " Percent Completed: " + k * 2 + "%");
        var batch = "";
        for (let i = 0; i < 200000; i++) {
          //max size of string is 2^27 to be safe, therefore = 2^27 / maxBatchCharLen for least iterations
          //iteresting to note that mdn doesnt tell us the max length of an obj property name, this is based on the browser engine
          var newCritic =
            Math.floor(Math.random() * 10000000) +
            1 +
            "|" +
            faker.lorem.words(15) +
            "|" +
            Math.round(Math.random()) +
            "|" +
            Math.floor(Math.random() * 10000000 + 1) +
            "|" +
            randomDate();
          if (k !== 49 || i !== 199999) {
            batch += newCritic + "\n"; //is there any benefit to splitting by lines in csv?
          } else {
            batch += newCritic;
          }
        }
        filePath.write(batch, "utf8");
      }
      filePath.end();
    }
  } else if (fileType === "json") {
    const filePath = fs.createWriteStream("./data/" + path);
    filePath.on("finish", () => {
      console.log("Finished writing data");
    });
    filePath.write("[", "utf8");
    for (let k = 0; k < 100; k++) {
      console.log("Percent Completed: " + k + "%");
      var batch = "";
      for (let i = 0; i < 200000; i++) {
        //max size of string is 2^27 to be safe, therefore = 2^27 / maxBatchCharLen for least iterations
        let newReview = {
          criticId: Math.floor(Math.random() * 10000000) + 1,
          text: faker.lorem.words(15),
          rating: Math.round(Math.random()),
          movieId: Math.floor(Math.random() * 10000000 + 1),
          date: randomDate()
        };
        if (k !== 99 || i !== 199999) {
          batch += JSON.stringify(newReview) + ",";
        } else {
          batch += JSON.stringify(newReview);
          filePath.write(batch + "]", "utf8");
          filePath.end();
          return;
        }
      }
      filePath.write(batch, "utf8");
    }
  }
}

function readReviews(path) {
  var rStream = fs.createReadStream("./data/" + path);
  rStream.on(
    "data",
    chunk => console.log("data chunk", chunk.toString()) //somehow changes the data to chunks?
  );
}

function readCritics(path) {
  var rStream = fs.createReadStream("./data/" + path);
  rStream.on(
    "data",
    chunk => console.log("data chunk", chunk.toString()) //the chunks end anywhere in the string
  );
}

//-----------------------------------------------------------------------------------------------

// Data Generation Scripts (path in current directory, file extension) supports json and csv

//generateCritics('critics.csv', 'csv'); //currently generates 10M critics
generateReviews("reviews", "csv"); //currently generated 10M reviews

//-----------------------------------------------------------------------------------------------

// Data Read Streams (in chunks)

//readReviews('reviews.csv');
//readCritics('critics.csv');

//-----------------------------------------------------------------------------------------------

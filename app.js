// import core module => installé avec node
const fs = require("fs");
console.log(fs);
let code = 'console.log("Hello")';
// //Create file with FS
fs.writeFile('Test.js', code, function (err) {
   if (err) {console.log(err)} else {
      console.log("File is created successfully.");    }; 
   });
 fs.mkdir("newFolder", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder created successfully.");
  }
});


/*
/// step 1
console.log("startinggg ...");

/// step 2
// Asynchronous read
fs.readFile("./GomyCode.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

//Synchronous read
// let data = fs.readFileSync("./GomyCode.txt");
// console.log('Synchronous Read: ', data.toString());

// step 3
console.log("finishingg ..");*/

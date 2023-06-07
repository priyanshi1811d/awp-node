var fs = require("fs");
console.log("serving user1")
fs.readFile('myfile.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("serving user2")
console.log("serving user3")
console.log("Program Ended")
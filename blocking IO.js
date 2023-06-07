var fs = require("fs")
console.log("serving user1")

var data = fs.readFileSync('myfile.txt')
console.log(data.toString());

console.log("serving user2")
console.log("serving user3")
console.log("Program Ended")

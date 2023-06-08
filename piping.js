var fs = require('fs');
var reader=fs.createReadStream('in.txt');
var writer=fs.createWriteStream('pipeout.txt');
reader.pipe(writer);
console.log("end of piping program");
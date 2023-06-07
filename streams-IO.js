const fs = require('fs');

const readerStream = fs.createReadStream('input.txt');
const writerStream = fs.createWriteStream('output.txt');

let data = "";

readerStream.setEncoding('UTF8');

readerStream.on('data' , (chunk) => {
    data += chunk;
})

readerStream.on('end' , () => {
    console.log("Reading Complete");
    writerStream.write(data, 'utf8');
    writerStream.end();
    writerStream.on('finish' , () => {
        console.log("Writing Complete");
    })
})

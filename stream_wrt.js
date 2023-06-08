var fs = require('fs');
var data = 'writing data stream from node js';
var write=fs.createWriteStream('out.txt');
write.write(data,'utf-8');
write.end();
write.on('finish',function(){
    console.log("writing done");
});
write.on('error',function(err){
    console.log(err.stack);
});
console.log("end of my program");
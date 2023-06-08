var fs=require('fs');
var data='';
var reader=fs.createReadStream('in.txt');
reader.setEncoding('utf8');
reader.on('data',function(chunk){
    data+=chunk;
});
reader.on('end',function(){
    console.log(data);
});
console.log("end of the program")
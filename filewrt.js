var fs=require('fs');
var str="these sentences are written by priyanshi";
fs.writeFile('myfile.txt',str,function(err){
    if(err)
    console.log(err)
    console.log("something is written in the file");
});
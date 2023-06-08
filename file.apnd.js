var fs = require('fs');
var str = "Appended textt";
fs.appendFile('myfile.txt',str,function(err){
    if(err)
    console.log(err)
    console.log("I have appended the contents and text in the file");
});
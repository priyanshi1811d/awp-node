var fs = require('fs');
fs.unlink('tempfile.txt',function(err){
    if(err)
    throw err;
    console.log("file has been deleted from your folder..sorryy");
});
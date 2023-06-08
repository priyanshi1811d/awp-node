var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/',function(req,res){

})
var server = app.listen(8084,function(){
    console.log("example static file server..");
})
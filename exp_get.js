var express = require('express');
var app = express();
app.get('/',function(req,res){
    console.log("got a GET request for the homepage..");
    res.send('hello GET..');
})
app.get('/list_user',function(req,res){
    console.log("Got a GET request for /list_user");
    res.send('Page listing');
})
var server = app.listen(8083,function(){
    console.log("server is listening..");
})
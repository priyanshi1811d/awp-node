var express = require('express');
var app = express();
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
})
app.get('/process_get',function(req,res){
    response={
        fname:req.query.fname,
        lname:req.query.lname
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(8085,function(){
    console.log("server handling get method");
})
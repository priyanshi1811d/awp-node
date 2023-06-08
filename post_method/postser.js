var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/indexx.html',function(req,res){
    res.sendFile(__dirname+"/"+"indexx.html");
})
app.post('/process_post',urlencodedParser,function(req,res){
    response={
        fname:req.body.fname,
        lname:req.body.lname
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server=app.listen(8086,function(){
    console.log("server handling post method...");
})
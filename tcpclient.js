var net=require('net');
var readline=require("readline-sync");
var PORT=8082;
var HOST='localhost';

var client=new net.Socket();

client.connect(PORT,HOST,function(){
    console.log("connection established with server");
    var mydata=readline.question("enter data for sending to server");
    client.write(mydata);
});
client.on("data",function(d){
    console.log("data received from server is %s",d);
    client.end();
});
client.on("end",function(){
    console.log("request is ended");
});
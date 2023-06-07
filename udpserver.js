var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening',function(){
    var myaddress = server.address();
    console.log('UDP Server listening on' + HOST + ':' + myaddress.port);
});
server.on('message',function(message){
    console.log("server received msg is: " + message);
});
server.bind(PORT,HOST);
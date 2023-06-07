var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = 'Hi from udp client..';

var client = dgram.createSocket('udp4');
client.send(message, PORT, HOST, function(){
    console.log('UDP msg sent to' + HOST + ':' + PORT);
});
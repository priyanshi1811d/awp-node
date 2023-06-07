var net = require('net');
var server = net.createServer();
server.on("connection",function(socket)
{
    var clientaddress=socket.remoteAddress+":"+socket.remotePort;
    console.log("connection with client %s is established",clientaddress);
    socket.on("data",function(mydata) {
        console.log("\ndata received is %s",mydata.toString());
        socket.write("i am fine");
    });

    socket.on("close",function(){
        console.log("connection with %s is closed",clientaddress);
    });
});

server.listen(8082,function(){
    console.log("server is listening to %j",server.address());
});
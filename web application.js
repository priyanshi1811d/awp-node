var http = require('http')
//use the require directive to load the http module and
//store the returned HTTP instance into an http variable
http.createServer(function(req,res) {
    res.end("Hello World")
}).listen(3001)
console.log('Server running at http://127.0.0.1:3001/')
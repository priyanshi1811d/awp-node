var events = require('events');
var em = new events.EventEmitter();
var funAdd = function(a,b) {
    var a=10;
    var b=36;
    var sum=a+b;
    console.log("when event occured Addition function is called");
    console.log("sum will be: "+sum);
}
em.on('firstevent',funAdd);
em.emit('firstevent');
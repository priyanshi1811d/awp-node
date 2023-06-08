var events = require('events');
var em = new events.EventEmitter();
var myHandler=function(){
    console.log('when event occurs myHandler is called');
}
em.on('firstevent',myHandler);
em.emit('firstevent');
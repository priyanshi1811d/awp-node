var events=require('events');
var em = new events.EventEmitter();
var myfun=function(data1,data2){
    console.log("my123");
    console.log("data passed is" + data1+" "+data2);
}
em.on('firstevent',myfun);
em.emit('firstevent','data1','data2');
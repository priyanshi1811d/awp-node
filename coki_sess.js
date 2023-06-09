//cookie_session
var express=require('express');
var app=express();
var cookieparser=require('cookie-parser');
var session=require('express-session');
app.use(cookieparser());
app.use(session({
    secret:'secret',
    cookie:{
        maxAge:10000
    }
}));
app.get('/',function(req,res){
    if(req.session.count==null){
        req.session.count=1;
    }else{
        req.session.count+=1;
    }
    res.send((JSON.stringify(req.session.count))+"<br>"+JSON.stringify(req.sessionID));
})
app.listen(3000,()=>
{
    console.log('server listening to localhost:3000')
});

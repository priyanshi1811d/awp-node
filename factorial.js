var fact = function(x,next) {
    if(x<0) {
        next(new Error ("Cannot find factorial"));
    }
    else {
       let factorial = 1;
       for (let i=2; i<=x; i++) {
        factorial = factorial*i;
       }
         next(null,factorial);
    }
}

fact(4, function(err,result){
    if(err)
    console.log("cannot find" , err);
    else
    console.log("result: " +result);
}
);

fact(-5, function(err,result){
    if(err)
    console.log("cannot find" , err);
    else
    console.log("result: " +result);
})
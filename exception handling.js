function handler(err,val) {
    if(err) {
        console.log("Error: " + err.message);
        return;
    } else {
        console.log("Division Result is: " +val);
    }
}

function divide(n1, n2, next) {
    if(n2 === 0) {
        next(new Error("Cannot divide by zero."));
        return;
    }

    next(null, n1/n2);
}

divide(9,0,handler);
divide(9,3,handler);
function log(msg){
    console.log(msg);
}

// log("Mi fantastico log");

var numbers = [1,2,3,4];

/*
numbers.forEach(log)


numbers.forEach(function log(msg){
    console.log("v2:"+msg);
});

numbers.forEach(function (msg){
    console.log("v3:"+msg);
});


// MEJOR
numbers.forEach((msg) => {
    console.log("v4:"+msg);
});
*/

var i = numbers.filter((n) =>{
    return n>2;
}).map((n)=>{
    return n+1;
}).reduce((a,n) =>{
    return n + a;
});

log(i);
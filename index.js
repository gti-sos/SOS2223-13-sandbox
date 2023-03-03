/*console.log("Hello world");
var a;
a = 1;
console.log(a);

var myInteger = 1;
var myDouble = 2.1;
var myString = "Irene";
var myBoolean = true;

myDouble = myDouble +1;

console.log(myDouble);
*/

/*
var a = 1, b=1;
var a = 1, b="1";

if(a==b)
if(a===b){
    console.log("Iguales");
} else {
    console.log("Distintos");
}
*/

/*
function log(msg){
    console.log(msg);
}

log("Mi fantastico log");

var o = new Object();

o.name = "petete";

o.l = log;

o.l("log del objeto");


var m = new Map();

var a = new Array();

a = [1,2,3,4];
a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;

a.push(5);

log(a);
*/


/*

function log(msg){
    console.log(msg);
}

var numbers = [1, 2, 3, 4];

//for(var i =0; i<numbers.length; i++){
//    log(numbers[i]);
//}
numbers.forEach(log);

numbers.forEach(function (msg){
    console.log("v2:" + msg);
});

numbers.forEach(function (msg){
    console.log("v3:" + msg);
});


numbers.forEach((msg) => {
    console.log("v4:" + msg);
});

*/

/*
function log(msg){
    console.log(msg);
}

var numbers = [1, 2, 3, 4];

var i =numbers
    .filter((n) => {
        return n > 2
    }).map((n)=>{
        return n + 1;
    }).reduce((a,n) =>{
        return n + a;
    });

log(i);

*/
//------------------------------------------------------------


var express = require("express");
var cool = require("cool-ascii-faces");

var app = express();
var port = process.env.PORT || 12345;

app.get("/faces", (req, res)=> {
    res.send(cool());
    console.log("New request");
});


app.listen(port, () =>{
    console.log("server ready in port ${port}");

    
});


console.log(cool());





































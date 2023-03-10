/*function log(msg){
    console.log(msg);
}

// log("Mi fantastico log");

var numbers = [1,2,3,4];

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


var i = numbers.filter((n) =>{
    return n>2;
}).map((n)=>{
    return n+1;
}).reduce((a,n) =>{
    return n + a;
});

log(i);*/

//
//
//
//
//24-02-2023
//
//
//
//
//con npm install se instala todos los modulos necesarios para tus json.
var express = require("express");
var cool = require("cool-ascii-faces");
var bodyParser = require("body-parser");
var backend = require("./backend");

var app = express();
var port = process.env.PORT || 12345;

//middleware: es cada una de las piezas de una cadena de montaje.
app.use("/",express.static("./public")); //importante despues antes bodyParser

app.use(bodyParser.json());

backend(app);

app.get("/faces", (request,response) => {
    response.send(cool());
    console.log("New request");
});

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});




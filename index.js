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

var app = express();
var port = process.env.PORT || 12345;
app.use(bodyParser.json());

var contacts = [
       { name : "pepe",
       phone:12345},
       {name : "pablo",
       phone:6789}
];

const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL+"/contacts", (request,response) => {
    response.json(contacts);
    console.log("New GET request to /contacts"); //console.log en el servidor    
});

app.post(BASE_API_URL+"/contacts", (request,response) => {
    var newContact = request.body;
    console.log(`NewContact = ${JSON.stringify(newContact,null,2)}`); 
    console.log("New POST to /contacts"); //console.log en el servidor
    contacts.push(newContact);
    response.sendStatus(201);
})

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});
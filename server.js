'use strict';

// -- Require Dependencies
const http = require('http');
const express  = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

// -- Setup DB Connection
const db = require('mongoose');   
db.connect('mongodb://localhost/mirage');


// -- CORS
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");  
  next();      
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var Journeys = db.model('Journeys', {
    name : String,
    middle_name : String,
    last_name : String, 
    gender : String,
    origin : String,
    age : String
});


let getJourneys = () => {
app.get('/journeys', function(request, response) {
        Journeys.find(function(error, journeys) {
            if (error)
                response.send(error)
            response.json(journeys);
            console.log("GET Journeys: " + response.statusCode);
            return response.statusCode;
        });
    });
}

getJourneys();

// -- Listen
let port = process.env.PORT || 8282;
app.listen(port);
console.log("Server listening on port " + port);

let startServer = () => {
  return port
}


module.exports = { startServer: startServer };
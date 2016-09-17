'use strict';

// -- Require Dependencies
const http = require('http');
const express  = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

// -- Setup DB Connection
const mongoose = require('mongoose');   
mongoose.connect('mongodb://localhost/library');


// -- CORS
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");  
  next();      
});




// -- Listen
let port = process.env.PORT || 8282;
app.listen(port);
console.log("Server listening on port " + port);

let startServer = () => {
  return port
}

module.exports = { startServer: startServer };
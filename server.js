'use strict';

var http = require('http');
var express  = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
var app = express();

var port = process.env.PORT || 7878;
app.listen(port);
console.log("Server listening on port " + port);
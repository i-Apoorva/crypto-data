var express = require('express');
var app  = express(); 
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var mongoose   = require('mongoose'); 
const axios = require('axios');  
var Crypto = require('./models/crypto');
var routes = require('./routes/router');
var mongoDB ="mongodb+srv://test:test@cluster0-ftigl.mongodb.net/test?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({useNewUrlParser: true, extended: true} ));
app.use(bodyParser.json());

app.get('/', function(err, res){
    res.send("hello to crypto market");
});             

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}); // connect to our database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
  });
   
app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', routes);

app.listen(port);
console.log('Magic happens on port ' + port);




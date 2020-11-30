var express = require('Express');
var app = express();
// var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer();

// for parsing application/json
// app.use(bodyParser.json()); 

// for parsing multipart/form-data
// app.use(upload.array());

var main_routes = require('./main_routes.js');

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//both index.js and main_routes.js should be in same directory
app.use('/', main_routes);

//Middleware function to log request protocol
// app.use('/', function(req, res, next){
//    console.log("A request for things received at " + Date.now());
//    next();
// });


// http://localhost:3000/id/123
app.get('/id/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});


app.get('/test', function(req, res){
   res.send('GET route on testing page.');
});


//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});


app.use(function(req, res, next){
   console.log("A request has been received at " + Date.now());
   next();
});

app.listen(3000);
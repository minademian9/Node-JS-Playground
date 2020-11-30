var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   console.log("A request has been received at " + Date.now());
   res.send('GET route on things.');
   
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;
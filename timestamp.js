//pass a string as a parameter , and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
//If it does, it returns both the Unix timestamp and the natural language form of that date
//If it does not contain a date or Unix timestamp, it returns null for those properties.

//need to set up jade or handlebars



var express = require('express');


var app = express();

app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.render('main');
});


app.get('/:date', function(req, res){
    
    res.end('I have received ' + req.params.date);
});


app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
//pass a string as a parameter , and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
//If it does, it returns both the Unix timestamp and the natural language form of that date
//If it does not contain a date or Unix timestamp, it returns null for those properties.

//need to set up jade or handlebars



var express = require('express');


var app = express();

//app.set('view engine', 'jade');

//app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('main');
});

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year, monthNumber, month, day, unix;        

app.get('/:date', function(req, res){
    

    
    function isNatural(enteredDate) {
        year = enteredDate.getFullYear();
        monthNumber = enteredDate.getMonth();
        month = monthNames[monthNumber];
        day = enteredDate.getDate();
        unix = enteredDate.getTime();
        
        return '{"unix":' + unix.toString().slice(0,-3) + ',"natural":' + '"' + month + ' ' + day + ', ' + year + '"}';
    }
    
    function isUnix(enteredDate) {
        year = enteredDate.getFullYear();
        monthNumber = enteredDate.getMonth();
        month = monthNames[monthNumber];
        day = enteredDate.getDate();
        unix = enteredDate.getTime();
        
        return '{"unix":' + unix.toString().slice(0,-3) + ',"natural":' + '"' + month + ' ' + day + ', ' + year + '"}';
    }
    
    
    var enteredDateString = new Date(req.params.date);
    var enteredDateNumber = new Date(Number(req.params.date) * 1000);
    
    if (enteredDateString == 'Invalid Date'){
        if (enteredDateNumber == 'Invalid Date'){
            res.end('{"unix":null,"natural":null}');
        }
        else {
            res.end(isUnix(enteredDateNumber));
        }
    }
    else {
        res.end(isNatural(enteredDateString));
    }

});




app.listen(process.env.PORT || 3000, function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
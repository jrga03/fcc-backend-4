var express = require('express');
var fs = require('fs');
var app = express();

fs.readFile(process.argv[3], function doneReading(error, data) {
    if (error) { console.error(error) }
    
});

app.listen(process.argv[2]);
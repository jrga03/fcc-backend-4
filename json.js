var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(error, data) {
        if (error) { console.error(error) }
        var object = JSON.parse(data);
        res.end(JSON.stringify(object));
    });
});

app.listen(process.argv[2]);
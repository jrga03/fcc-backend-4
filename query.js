var express = require('express');
var app = express();

app.get('/search', function(req, res) {
    var data = {
        'results': req.query.results,
        'type': req.query.type,
        'page': req.query.page
    };
    res.send(JSON.stringify(data))
});
app.listen(process.argv[2]);

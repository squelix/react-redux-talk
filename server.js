var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.listen(3010, function() {
    console.log('GOOD');
});
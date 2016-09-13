var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname)));

app.listen(process.env.PORT || 3000);
console.log("Listening on port 3000");

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
// Routing

app.listen(8080, () => {
  console.log('listening on 8080');
});

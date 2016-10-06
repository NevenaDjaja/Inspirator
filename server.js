var express = require('express');
var app = express();

app.use(express.static('src'));
app.use('/build', express.static('build'));

app.listen(8000, function() {
  console.log("Listening on port", 8000 || process.env.PORT);
})

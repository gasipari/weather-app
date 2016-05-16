// load express lib
var express = require('express');

// create the app
var app = express();
const PORT = process.env.PORT || 3000;

// redirect https request to http
// to fix openWeatherMap http only issue
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') { // does not exist on localhost
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})
app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
})

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var csrf = require('csurf');
var express = require('express');

// Route middlewares
var csrfProtection = csrf({ cookie: true });

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
// Parse cookies
// We need this because "cookie" is true in csrfProtection
app.use(cookieParser());

app.get('/api', csrfProtection, function(req, res) {
  // Pass the Csrf Token
  res.cookie('XSRF-TOKEN', req.csrfToken(), { httpOnly: false });
  res.json({});
});

app.post('/api/login', csrfProtection, function(req, res) {
  // For this example: login is always successful if the request passes the "csrfProtection" middleware
  // Set Access Token. Atuhentication, on this application, works with cookies:
  res.cookie('AccessToken', '***Auth token value***',  { httpOnly: true, expires: 0 });
  res.json({"status": "logged"});
});

app.get('/api/users', function(req, res) {
  // Check for auth cookie
  var token = req.cookies['AccessToken'];
  if (token === '***Auth token value***') {
    res.json({users: [{name:"Mario", lastname: "Rossi"}, {name: "Bob", lastname: "Davison"}]});
  } else {
    res.status(401).send();
  }
});

app.listen(3000, () => console.log(`Server started on port 3000`));

//module.exports = app;

require('babel-core/register')({
  "presets": ["es2015", "react", "stage-1"]
});


var createError = require('http-errors');
var express = require('express');
var serveStatic = require('serve-static')
var path = require('path');
var logger = require('morgan');

var app = express();


//PROXY
var httpProxy = require('http-proxy');
// REQUEST HANDLER FOR SERVER-SIDE RENDERING
var requestHandler = require('./requestHandler.js');


//PROXY TO API
const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001'
});

app.use('/api', function (req, res) {
  apiProxy.web(req, res);
})
// END PROXY


app.use(serveStatic(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(requestHandler);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

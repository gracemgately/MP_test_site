var app = require('express')();
var path = require('path');
var session = require('express-session');

app.use('/api', require('../api'))


module.exports = app;
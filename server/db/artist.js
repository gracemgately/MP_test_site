'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');

var Artist = db.define('artist', {
    name:{
        type: Sequelize.STRING,
    },
    date:{
        type: Sequelize.STRING,
    }
});

module.exports = Artist;


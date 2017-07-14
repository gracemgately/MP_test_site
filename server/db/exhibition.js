'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');

var Exhibition = db.define('exhibition', {
    name: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    }
});

module.exports = Exhibition;


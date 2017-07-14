'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');

var Artwork = db.define('artwork', {
    title: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    materials: {
        type: Sequelize.TEXT
    },
    dimensions: {
        type: Sequelize.STRING
    },
    notes: {
        type: Sequelize.TEXT
    }
});

module.exports = Artwork;


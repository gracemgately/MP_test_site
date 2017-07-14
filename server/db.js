'use strict';

var db = require('./_db');

var Artist = require('./db/artist');
var Artwork = require('./db/artwork');
var Exhibition = require('./db/exhibition');

Artwork.belongsTo(Artist);
Artist.hasMany(Artwork,{
    onDelete: 'cascade',
    hooks: true
});

Exhibition.belongsToMany(Artist, {through: 'artist_exhibition'});
Exhibition.belongsToMany(Artwork, {through: 'artwork_exhibition'});


module.exports = db;
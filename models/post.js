
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Creo el esquema de mi db
const PostSchema = new Schema({
 title: String,
 description: String
});

module.exports = mongoose.model('Post', PostSchema);

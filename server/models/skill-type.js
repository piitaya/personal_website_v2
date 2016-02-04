// load the things we need
var mongoose = require('mongoose');
var slug = require('mongoose-url-slugs');
var Schema = mongoose.Schema;

// define the schema for our user model
var schema = Schema({
	name: {type: String, required: true, trim: true},
	icon: {type: String}
});

schema.plugin(slug('name'));

module.exports = mongoose.model('SkillType', schema);
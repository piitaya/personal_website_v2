// load the things we need
var mongoose = require('mongoose');
var slug = require('mongoose-url-slugs');
var Schema = mongoose.Schema;

// define the schema for our user model
var schema = Schema({
	title: {type: String, required: true, trim: true},
	description: {type: String},
	company: {type: String, required: true, trim: true},
	city: {type: String, required: true, trim: true},
	country: {type: String, required: true, trim: true},
	startDate: {type: Date, required: true},
	endDate: {type: Date},
	isCurrent: {type: Boolean, required: true},
	type: {type: Schema.Types.ObjectId, ref: 'ExperienceType'}
});

schema.plugin(slug('title company'));

module.exports = mongoose.model('Experience', schema);
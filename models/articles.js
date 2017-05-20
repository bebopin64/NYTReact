var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	date: {
		type: Date
	},
	url: {
		type: String,
		required: true,
		unique: true
	},
	saved: {
		type: Boolean,
		default: false
	},
	notes: {
		type: String,
	}
});

var Articles = mongoose.model("Articles", schema);

module.exports = Articles;
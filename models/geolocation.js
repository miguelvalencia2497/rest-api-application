const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// Create driver schema and model
const GeoSchema = new Schema({
	type: {
		type: String,
		default: "Point"
	},
	coordinates: {
		type: [Number],
		index: "2dsphere"
	}
});

module.exports = GeoSchema;

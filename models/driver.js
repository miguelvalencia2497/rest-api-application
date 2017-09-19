const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const GeoSchema = require ('./geolocation');

// Create driver schema and model
const DriverSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	rating: {
		type: Number,
	},
	available: {
		type: Boolean,
		default: false
	},
	geometry: GeoSchema
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
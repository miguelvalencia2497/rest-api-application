const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connecto to mongodb
mongoose.connect('mongodb://localhost/driverdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use(function(err, req, res, next){
	// console.log(err);
	res.status(422).send({
		error: err.message
	})
});

app.listen(process.env.port || 3000, function(){
	console.log('Listening to port 3000');
});
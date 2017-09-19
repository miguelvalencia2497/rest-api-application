const express = require ('express');
const router = express.Router();
const Driver = require('../models/driver');

// Get a list of drivers from the database
router.get('/drivers', function(req, res, next){
	res.send({type: 'GET'});
});

// Add a new driver to the database
router.post('/drivers', function(req, res, next){
	Driver.create(req.body).then(function(driver){
		res.send(driver);
	}).catch(next);
});

// Update a driver in the database
router.put('/drivers/:id', function(req, res, next){
	Driver.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Driver.findOne({_id: req.params.id}).then(function(driver){
			res.send(driver);
		});
	});
});

// Delete a driver from the database
router.delete('/drivers/:id', function(req, res, next){
	Driver.findByIdAndRemove({_id: req.params.id}).then(function(driver){
		res.send(driver);
	});
});

module.exports = router;


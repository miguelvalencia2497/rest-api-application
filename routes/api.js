const express = require ('express');
const router = express.Router();

// Get a list of drivers from the database
router.get('/drivers', function(req, res){
	res.send({type: 'GET'});
});

// Add a new driver to the database
router.post('/drivers', function(req, res){
	res.send({type: 'POST'});
});

// Update a driver in the database
router.put('/drivers/:id', function(req, res){
	res.send({type: 'PUT'});
});

// Delete a driver from the database
router.delete('/drivers/:id', function(req, res){
	res.send({type: 'DELETE'});
});

module.exports = router;


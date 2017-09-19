const express = require ('express');

const app = express();

app.get('/api', function(req, res){
	console.log('get request on /');
	res.send({
		name: 'Migo'
	});
});

app.listen(3000, function(){
	console.log('Listening to port 3000');
});
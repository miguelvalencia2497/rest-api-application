const express = require ('express');

const app = express();

app.use('/api', require('./routes/api'));


app.listen(process.env.port || 3000, function(){
	console.log('Listening to port 3000');
});
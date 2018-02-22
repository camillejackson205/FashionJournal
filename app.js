require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');


//   sequelize.sync({force:true});
sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-sessions'));
app.use('/api/user', require('./routes/user'));
//login route
app.use('/api/login', require('./routes/session'));
app.use('/api/style', require('./routes/style'));






app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3005, function(){
	console.log('App is listening on 3005.')
});









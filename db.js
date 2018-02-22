var Sequelize = require('sequelize');
var sequelize = new Sequelize('fashionjournal', 'postgres', 'skip983825', {
	host: 'localhost',
	dialect: 'postgres',
	port: 5433
});



sequelize.authenticate().then(
	function() {
		console.log('connected to fashionjournal postgres db');
	},
	function(err){
		console.log(err);
	}
);

var User = sequelize.import('./models/user');

module.exports = sequelize;
var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Style = sequelize.import('../models/style');
// Style.sync({force: true})
router.post('/', function(req, res) {
	// req has some body properties that have a username and pwd
	console.log(req.body)
	var occassion = req.body.style.occassion;
	var weather = req.body.style.weather;
	var mood = req.body.style.mood;
	var outfit = req.body.style.outfit;
    var owner  = req.user.id;
    
   

    // Use our sequelize model to create log
  	Style
	    .create({ 
			occassion: occassion,
			weather: weather,
			mood: mood,
			outfit: outfit,
	    	owner: owner
	    	
	    })
	    .then(
	    	function createSuccess(style) {
	    		res.json({
					style: style
				});
	    	}, 
		    function createError(err) {
		        res.send(500, err.message);
		    }
	    );
});

router.get('/', function(req, res) {
	console.log(req.user)
	var userid = req.user.id;
	Style
	.findAll({
		where: { owner: userid }
	})
	.then(
		function findAllSuccess(data) {
			//  console.log(data);
			res.json(data);
		},
		function findAllError(err) {
			res.json( err.message);
		}
	);
});

//This will retrieve one workout specified by the log id
//This will retrieve one workout specified by the log id
router.get('/:id', function(req, res) {
	var data = req.params.id;
	//console.log(data); here for testing purposes
	Style
		.findOne({
			where: { id: data }
		}).then(
			function getSucces(updateData) {
				res.json(updateData);
			},

			function getError(err) {
				res.send(500, err.message);
			}
		);
});

//This will return the data from the log that was updated
router.put('/', function(req, res) {
	var occassion = req.body.style.occassion;
	var weather = req.body.style.weather;
	var mood = req.body.style.weather;
	var outfit = req.body.style.outfit; 
    var data = req.body.style.id;
    console.log(req);
    Style
    	.update(
    	{
			occassion: occassion,
			weather: weather,
			mood: mood,
			outfit: outfit
    	},

    	{where: {id: data}}
    	).then(
    		function updateSuccess(updatedStyle) {
    			res.json(updatedStyle);
    		},

    		function updateError(err){
    			res.send(500, err.message);
    		}
    	)
});


router.delete('/', function(req, res) {
	var data = req.body.style.id;
	Style
		.destroy({
			where: { id: data }
		}).then(
			function deleteLogSuccess(data){
				res.send("you removed an Outfit");
			},
			function deleteLogError(err){
				res.send(500, err.message);
			}
		);
});

module.exports = router;
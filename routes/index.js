var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');

// router.get('/', function(req, res, next) {
// 	res.render('index', {title: 'NuColo'});

// });

router.get('/my_etools', function(req, res, next) {

var efridge;

connection.query('select * from  efridge', function (err, rows) {

	efridge = rows;

	if (!err) {

  res.render('my_etools', {

  	title: 'My e-tools',
  	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
  	data: efridge
  });


} if (err) {
		console.log(err);
	}	
 // connection.end();
});
});


router.post('/exEntry', function(req, res) {
	var userFirstName = req.body.userFirstName;
	res.send("The Username you requested:"+userFirstName);

});

module.exports = router;


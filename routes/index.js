var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');


router.get('/', function(req, res) {

var efridge;

connection.query('select * from  efridge', function (err, rows) {

	efridge = rows;

	if (!err) {

  res.render('index', {

  	title: 'My Efridge',
  	description: 'Printout of what\'s in my fridge.',
  	data: efridge
  });

} if (err) {
		console.log(err);
	}	

//	connection.end();
});

});

module.exports = router;

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');


router.get('/my_efridge', function(req, res, next) {

var efridge;

connection.query('select * from  efridge', function (err, rows) {

	efridge = rows;

	if (!err) {

  res.render('my_efridge', {

  	title: 'My e-fridge',
  	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
  	data: efridge
  });

} if (err) {
		console.log(err);
	}	

//	connection.end();
});

});

//module.exports = router;

// Learn how to make this do more than one thing without errors...related to next() and router.get

router.get('/', function(req, res, next) {
	res.render('index', {title: 'NuColo'});
	next();
});

// router.get('/login', function(req, res, next) {
// 	efridge = efridge;

//  	res.render('index', efridge);

// });

module.exports = router;

// connection.query('select * from  efridge', function (err, rows) {

// 	efridge = rows;

// 	if (!err) {

//	res.render('index', efridge);
//};
//	connection.end();


//});

// router.get('/', function(req, res, next) {

// var efridge;

// //can I put more of this and the code on ejs into a js file instead?
// connection.query('select * from  efridge', function (err, rows) {

// 	efridge = rows;

// 	if (!err) {

//   res.render('index', {

//   	title: 'My e-fridge',
//   	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
//   	data: efridge
//   });

// } if (err) {
// 		console.log(err);
// 	}	

// //	connection.end();
// });

// });


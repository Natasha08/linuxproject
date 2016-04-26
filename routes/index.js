var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');

//Learn how to make this do more than one thing without errors...related to next() and router.get
// router.get('/', function(req, res, next) {
// 	res.render('index', {title: 'This is it'})
// 	next();
// }

router.get('/', function(req, res, next) {

var efridge;

//can I put more of this and the code on ejs into a js file instead?
connection.query('select * from  efridge', function (err, rows) {

	efridge = rows;

	if (!err) {

  res.render('index', {

  	title: 'My e-Fridge',
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

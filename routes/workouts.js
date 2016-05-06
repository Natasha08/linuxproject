var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequireg = require('../public/javascripts/require');


router.get('/', function(req, res, next) {

	var egym;

	connectiong.query('select * from  egym', function (err, rows) {

	egym = rows;

	if (!err) {
		res.render('index', {
			title: 'My e-gym',
			description: 'Checkout your workouts!',
			data: egym
		});

	}	if (err) {
			console.log(err);
		}

});
});

module.exports = router;
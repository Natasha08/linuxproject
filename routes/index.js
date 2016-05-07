var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');


router.get('/', function(req, res, next) {
	res.render('index', {title: 'MyColo'});

});
module.exports = router;
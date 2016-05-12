var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');
// var sendgrid_api = require('../secret');
// var sendgrid  = require('sendgrid')(sendgrid_api);

router.get('/', function(req, res, next) {

//  sendgrid.send({
//   to:       '',
//   from:     '',
//   subject:  '',
//   text:     ''
// }, function(err, json) {
//   if (err) { return console.error(err); }
//   console.log(json);
// });


	res.render('index', {title: 'MyColo'});


});
module.exports = router;
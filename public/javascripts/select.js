var mysql = require('mysql');
var mysql = require('./require');

var dbtest = connection.query('select * from  efridge', function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else {

	console.log(result);

}})

module.exports = dbtest;
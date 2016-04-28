var mysql = require('mysql');
var mysql = require('./require');

userSearch = getElementById('userSearch');

var dbtest = connection.query('select * from  efridge where food_name set ?', userSearch, function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else {

	console.log(result);

}})

module.exports = dbtest;
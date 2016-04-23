var mysql = require('mysql');
var mysql = require('./require');

connection.connect();

connection.query('select * from  foods', function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else
	console.error(result);
})
connection.end();
var mysql = require('mysql');
var require = require('./require');

var efridge = {
	food_name: '',
	brand: '',
	serving_size: '',
	total_calories: '',
	fat_grams: '',
	carbohydrate_grams: '',
	protein_grams: '',
	total_grams: ''
};

var query = connection.query('insert into efridge set ?', efridge, function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else
	console.error(result);
});
var mysql = require('mysql');
var require = require('./require');

var efridge = {
	food_name: 'Chicken Breast',
	brand: 'Kroger',
	serving_size: '4oz',
	total_calories: '110',
	fat_grams: '2.5',
	carbohydrate_grams: '',
	protein_grams: '21',
	total_grams: '23.5'
};

var query = connection.query('insert into efridge set ?', efridge, function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else
	console.error(result);
});
var mysql = require('mysql');
var require = require('require');

var foods = {
	food_name: 'Almonds, Raw',
	serving_size: '30',
	total_calories: '170',
	fat_grams: '15',
	carbohydrate_grams: '7',
	protein_grams: '6',
	total_grams: '28'
};

var query = connection.query('insert into foods set ?', foods, function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else
	console.error(result);
});
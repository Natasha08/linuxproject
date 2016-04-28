var express = require('express');
var router = express.Router();

/* GET nutrition listing. */

router.get('/my_efridge', function(req, res, next) {

var efridge;

connection.query('select * from  efridge', function (err, rows) {

	efridge = rows;

	if (!err) {

  res.render('my_efridge', {

  	title: 'My Efridge',
  	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
  	data: efridge
  });

} if (err) {
		console.log(err);
	}	

//	connection.end();
});

});


module.exports = router;

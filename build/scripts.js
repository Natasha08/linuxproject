var mysql = require('mysql');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var routesg = require('./routes/egym');
var routesf = require('./routes/efridge');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', routesg);
app.use('/', routesf);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});


module.exports = app;

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');

// router.get('/', function(req, res, next) {
// 	res.render('index', {title: 'NuColo'});

// });



router.get('/efridge', function(req, res, next) {

var efridge;

connection.query('select * from  efridge', function (err, rows) {

	efridge = rows;

	if (!err) {

  res.render('efridge', {

  	title: 'My e-tools',
  	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
  	data: efridge
  	 
  });

} if (err) {
		console.log(err);
	}	
 // connection.end();
});
});


router.post('/efridge', function(req, res, next) {

var efridge = {
 	food_name: req.body.food_name,
 	brand: req.body.brand,
	serving_size: req.body.serving_size,
	total_calories: req.body.total_calories,
	fat_grams: req.body.fat_grams,
	carbohydrate_grams: req.body.carbohydrate_grams,
	protein_grams: req.body.protein_grams,
	total_grams: req.body.total_grams
};

var query = connection.query('insert into efridge set ?', efridge, function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else
	res.redirect('/my_etools');
});
	

});


module.exports = router;


var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');


router.get('/egym', function(req, res, next) {

	var egym;

	connection.query('select * from  egym', function (err, rows) {

	egym = rows;

	if (!err) {
		res.render('egym', {
			title: 'My e-tools',
			description: 'Checkout your workouts!',
			data: egym
		});

	}	if (err) {
			console.log(err);
		}

});
});

module.exports = router;
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');

router.get('/', function(req, res, next) {

	res.render('index', {title: 'MyColo'});


});
module.exports = router;
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// This script deals mostly with client-side javascript functionality - mainly buttons.

//separated javascript control buttons on my_etools.ejs and 
//to prevent null errors with exerciseForm()
//to show the registration form 

function registerUser() {

var registerDiv = document.getElementById('registerDiv');


 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 } 
 else {
 	console.log('err');
}
};	

var showRegister = document.getElementById('btntest4');
showRegister.addEventListener('click', registerUser, false);


var homebtn



module.exports = registerUser;
module.exports = showRegister;

},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// To show the food profiles stored in the database.

function shownutritiontable() {
var foodData = document.getElementById('foodData');
var dataSearch = document.getElementById('dataSearch');


 if (foodData.hasAttribute('hidden')) {
 foodData.removeAttribute('hidden');
 dataSearch.removeAttribute('hidden');
 foodProfile.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showtblclick = document.getElementById('btntest3');
showtblclick.addEventListener('click', shownutritiontable, false);


//to show the food profile FORM for the user. 

function createFood() {
var foodProfile = document.getElementById('foodProfile');

 if (foodProfile.hasAttribute('hidden')) {
 foodProfile.removeAttribute('hidden');
 foodData.setAttribute('hidden', 'true');
 dataSearch.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showFood = document.getElementById('btntest1');
showFood.addEventListener('click', createFood, false);

module.exports = shownutritiontable;
module.exports = createFood;
module.exports = showFood;
},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//To show the workout input form

function exerciseForm() {
var workoutData = document.getElementById('workoutData');

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');
 } 
 else {
 	console.log('err');
}
};	

var showWorkout = document.getElementById('btntest5');
showWorkout.addEventListener('click', exerciseForm, false);

module.exports = exerciseForm;
},{}]},{},[1]);

// This script deals mostly with client-side javascript functionality - mainly buttons.

//create variable with anon function to control buttons on my_etools.ejs and 
//to prevent null errors with exerciseForm()
//to show the registration form 

var registerUser = function reg() {
var registerDiv = document.getElementById('registerDiv');


 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 } 
 else {
 	console.log('err');
}
	

var showRegister = document.getElementById('btntest4');
showRegister.addEventListener('click', reg, false);
};


module.exports = registerUser;

// To show the food profiles stored in the database.

function shownutritiontable() {
var foodData = document.getElementById('foodData');
var dataSearch = document.getElementById('dataSearch');


 if (foodData.hasAttribute('hidden')) {
 foodData.removeAttribute('hidden');
 dataSearch.removeAttribute('hidden');
 foodProfile.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showtblclick = document.getElementById('btntest3');
showtblclick.addEventListener('click', shownutritiontable, false);


//to show the food profile FORM for the user. 

function createFood() {
var foodProfile = document.getElementById('foodProfile');

 if (foodProfile.hasAttribute('hidden')) {
 foodProfile.removeAttribute('hidden');
 foodData.setAttribute('hidden', 'true');
 dataSearch.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showFood = document.getElementById('btntest1');
showFood.addEventListener('click', createFood, false);

//button2!


module.exports = shownutritiontable;
module.exports = createFood;
module.exports = showFood;
//To show the workout input form

function exerciseForm() {
var workoutData = document.getElementById('workoutData');

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');
 } 
 else {
 	console.log('err');
}
};	

var showWorkout = document.getElementById('btntest5');
showWorkout.addEventListener('click', exerciseForm, false);

//button3!

module.exports = exerciseForm;
var mysql = require('mysql');
// var require = require('./require');
var requireg = require('./requireg');

// var efridge = {
// 	food_name: '',
// 	brand: '',
// 	serving_size: '',
// 	total_calories: '',
// 	fat_grams: '',
// 	carbohydrate_grams: '',
// 	protein_grams: '',
// 	total_grams: ''
// };

// var query = connection.query('insert into efridge set ?', efridge, function (err, result) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	} else
// 	console.error(result);
// });


var egymA = {
	date: '2015-12-16',
	workout_day: 'Workout A',
	key_lift1: 'Incline Bench Press',
	weight1: '115',
	weight2: '105',
	weight3: '95',
	reps1: '5',
	reps2: '6',
	reps3: '8',
	key_lift2: 'Shoulder Press',
	weight4: '60',
	weight5: '70',
	weight6: '60',
	reps4: '5',
	reps5: '6',
	reps6: '8',
	secondary_lift1: 'Skull Crushers',
	weight7: '40',
	reps7: '10',
	reps8: '10',
	reps9: '5',
	secondary_lift2: 'Lateral Raises',
	weight8: '15',
	reps10: '8',
	reps11: '8',
	reps12: '8'
};

var query = connectiong.query('insert into egym set ?', egymA, function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else
	console.error(result);
});

// var egymB = {
// 	date: '2015-12-16',
// 	workout_day: 'Workout B',
// 	key_lift1: 'Incline Bench Press',
// 	weight1: '115',
// 	weight2: '105',
// 	weight3: '95',
// 	reps1: '5',
// 	reps2: '6',
// 	reps3: '8',
// 	key_lift2: 'Shoulder Press',
// 	weight4: '60',
// 	weight5: '70',
// 	weight6: '60',
// 	reps4: '5',
// 	reps5: '6',
// 	reps6: '8',
// 	secondary_lift1: 'Skull Crushers',
// 	weight7: '40',
// 	reps7: '10',
// 	reps8: '10',
// 	reps9: '5',
// 	secondary_lift2: 'Lateral Raises',
// 	weight8: '15',
// 	reps10: '8',
// 	reps11: '8',
// 	reps12: '8'
// };

// var query = connectiong.query('insert into egym set ?', egymB, function (err, result) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	} else
// 	console.error(result);
// });
var mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'tulsiqt',
	password: 'Yoni3454!',
	database: 'freetools'
});
// connectiong = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'tulsiqt',
// 	password: 'Yoni3454!',
// 	database: 'mainGym'
// });

module.exports = connection;
// module.exports = connectiong;

var mysql = require('mysql');
//var mysql = require('./require');

// var dbtest = connection.query('select * from  efridge', function (err, result) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	} else {

// 	console.log(result);

// }});

var dbtestg = connectiong.query('select * from  egym', function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else {

	console.log(result);

}});

//module.exports = dbtest;
module.exports = dbtestg;
var mysql = require('mysql');
var require = require('./require');

connection.query('USE mainfoods');
// This script deals mostly with client-side javascript functionality - mainly buttons.


//To show the workout input form

function exerciseForm() {
var workoutData = document.getElementById('workoutData');

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');
console.log('workoutData');
 } 
 else {
 	console.log('err');
}
};	

var showRegister = document.getElementById('btntest5');
showRegister.addEventListener('click', exerciseForm, false);


//create variable with anon function to control buttons on my_etools.ejs and 
//to prevent null errors with exerciseForm()


// To show the food profiles stored in the database.

function shownutritiontable(foodData, dataSearch) {
var foodData = document.getElementById('foodData');
var dataSearch = document.getElementById('dataSearch');


 if (foodData.hasAttribute('hidden')) {
 foodData.removeAttribute('hidden');
 dataSearch.removeAttribute('hidden');
 foodProfile.setAttribute('hidden', 'true');
 registerDiv.setAttribute('hidden', 'true');
 // workoutData.setAttribute('hidden', 'true');
 
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
 registerDiv.setAttribute('hidden', 'true');
 // workoutData.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showFood = document.getElementById('btntest1');
showFood.addEventListener('click', createFood, false);


//to show the registration form 

function registerUser() {
var registerDiv = document.getElementById('registerDiv');


 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 foodData.setAttribute('hidden', 'true');
 dataSearch.setAttribute('hidden', 'true');
 foodProfile.setAttribute('hidden', 'true');
 // workoutData.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showRegister = document.getElementById('btntest4');
showRegister.addEventListener('click', registerUser, false);


module.exports = exerciseForm;
module.exports = shownutritiontable;
module.exports = createFood;
module.exports = showFood;

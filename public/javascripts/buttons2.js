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

module.exports = showtblclick;
module.exports = showFood;
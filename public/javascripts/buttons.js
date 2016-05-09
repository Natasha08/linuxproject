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

//button1!
module.exports = registerUser;

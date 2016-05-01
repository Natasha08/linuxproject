
function shownutritiontable() {
var showtbl = document.getElementById('testtable');
 if (showtbl.hasAttribute('testhide')) {
 showtbl.removeAttribute('testhide');
 } else {
 	console.log('Not working for some reason');
}
}

module.exports = shownutritiontable

// var showtbl = document.getElementById('btntest1');
// showtbl.addEventListener('click', shownutritiontable, false);

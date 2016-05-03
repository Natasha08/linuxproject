alert('HI');

function shownutritiontable(err, result) {
var showtbl = document.getElementById('testtable');
 if (showtbl.hasAttribute('testhide')) {
 showtbl.removeAttribute('testhide');
 console.log('Check if it was removed');
 } else {
 	console.log('err');
}
}	

var showtblclick = document.getElementById('btntest1');
showtblclick.addEventListener('click', shownutritiontable, false);


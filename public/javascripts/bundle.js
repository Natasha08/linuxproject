
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var testtable = document.getElementById('testtable');
var testfood = document.getElementById('foodForm');
var dataSearch = document.getElementById('dataSearch');

function shownutritiontable() {

console.log(testtable);
 if (testtable.hasAttribute('hidden')) {
 testtable.removeAttribute('hidden');
 dataSearch.removeAttribute('hidden');
 testfood.setAttribute('hidden', 'true');
 console.log('testtable');
 } 
 else {
 	console.log('err');
}
}	

var showtblclick = document.getElementById('btntest3');
showtblclick.addEventListener('click', shownutritiontable, false);

function createFood() {


console.log(testfood);
 if (testfood.hasAttribute('hidden')) {
 testfood.removeAttribute('hidden');
 testtable.setAttribute('hidden', 'true');
 dataSearch.setAttribute('hidden', 'true');
 console.log('foodForm');
 } 
 else {
 	console.log('err');
}
}	

var showFood = document.getElementById('btntest1');
showFood.addEventListener('click', createFood, false);


},{}]},{},[1]);

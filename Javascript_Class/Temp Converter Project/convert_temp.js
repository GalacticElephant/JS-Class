"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	
	// update labels and clear disabled textbox
	
	// select text in degrees textbox

}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {   

	// get user entry
	
    // Use an 'if/else'
	
	// Validate user entery - check for numeric, notify user of error, clear previously computed value, and select text in degrees textbox	
	
	// if entry is valid
	// clear any previous error message
	// compute and display temp based on which radio button is checked
	// select text in degrees textbox
	

};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});
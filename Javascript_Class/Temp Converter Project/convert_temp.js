// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
	// Get references to the input elements and the convert button
	const toCelsiusRadio = document.getElementById("to_celsius");
	const toFahrenheitRadio = document.getElementById("to_fahrenheit");
	const degreesEnteredInput = document.getElementById("degrees_entered");
	const degreesComputedInput = document.getElementById("degrees_computed");
	const degreeLabel1 = document.getElementById("degree_label_1");
	const degreeLabel2 = document.getElementById("degree_label_2");
	const convertButton = document.getElementById("convert");
  
	// Attach a click event listener to the convert button
	convertButton.addEventListener("click", function () {
	  // Get the user's input and convert it based on the selected radio button
	  const degrees = parseFloat(degreesEnteredInput.value);
  
	  if (toCelsiusRadio.checked) {
		// Convert Fahrenheit to Celsius
		const celsius = (degrees - 32) * (5 / 9);
		degreesComputedInput.value = celsius.toFixed(2) + " °C";
		degreeLabel1.textContent = "Enter F degrees:";
		degreeLabel2.textContent = "Degrees Celsius:";
	  } else if (toFahrenheitRadio.checked) {
		// Convert Celsius to Fahrenheit
		const fahrenheit = (degrees * 9 / 5) + 32;
		degreesComputedInput.value = fahrenheit.toFixed(2) + " °F";
		degreeLabel1.textContent = "Enter C degrees:";
		degreeLabel2.textContent = "Degrees Fahrenheit:";
	  }
	});
  
	// Initially set labels based on the default selected radio button
	if (toCelsiusRadio.checked) {
	  degreeLabel1.textContent = "Enter F degrees:";
	  degreeLabel2.textContent = "Degrees Celsius:";
	} else if (toFahrenheitRadio.checked) {
	  degreeLabel1.textContent = "Enter C degrees:";
	  degreeLabel2.textContent = "Degrees Fahrenheit:";
	}
  
	// Attach change event listeners to the radio buttons to update labels
	toCelsiusRadio.addEventListener("change", function () {
	  degreeLabel1.textContent = "Enter F degrees:";
	  degreeLabel2.textContent = "Degrees Celsius:";
	});
  
	toFahrenheitRadio.addEventListener("change", function () {
	  degreeLabel1.textContent = "Enter C degrees:";
	  degreeLabel2.textContent = "Degrees Fahrenheit:";
	});
  });


 
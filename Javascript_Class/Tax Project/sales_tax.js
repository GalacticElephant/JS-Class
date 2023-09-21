document.addEventListener("DOMContentLoaded", function () {
	// Put things in things
	const subtotalInput = document.getElementById("subtotal");
	const taxRateInput = document.getElementById("tax_rate");
	const salesTaxInput = document.getElementById("sales_tax");
	const totalInput = document.getElementById("total");
  
	// Find button bois
	const calculateButton = document.getElementById("calculate");
	const clearButton = document.getElementById("clear");
  
	// Do the things
	calculateButton.addEventListener("click", function () {
	  // Steal user input
	  const subtotal = parseFloat(subtotalInput.value);
	  const taxRate = parseFloat(taxRateInput.value);
  
	  // Math the things
	  const salesTax = (subtotal * (taxRate / 100)).toFixed(2);
	  const total = (subtotal + parseFloat(salesTax)).toFixed(2);
  
	  // Display the final thing
	  salesTaxInput.value = salesTax;
	  totalInput.value = total;
	});
  
	// Nuke the things
	clearButton.addEventListener("click", function () {
	  subtotalInput.value = "";
	  taxRateInput.value = "";
	  salesTaxInput.value = "";
	  totalInput.value = "";
	  sound.play();
	});
  });
  
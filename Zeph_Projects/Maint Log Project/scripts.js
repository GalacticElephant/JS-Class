const today = new Date().toISOString().split('T')[0];
// Set the current date to today
document.getElementById('maintenanceDate').value = today;

// Array of breakdown options
const breakdownOptions = [
  "Aftertreatment",
  "Air Conditioning",
  "Air Leak",
  "APU",
  "Brakes",
  "Clutch",
  "Coolant",
  "Crash",
  "Damage",
  "Electrical",
  "Engine",
  "Fuel",
  "Hydraulics",
  "Mechanical",
  "Other",
  "Printer",
  "Steering",
  "Suspension",
  "Tires",
  "Transmission",
  "Windshield",
  "Qualcomm",
];

// Function to create and append options to a select element
function populateSelectWithOptions(selectElement, options) {
  options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    selectElement.appendChild(option);
  });
}

// Get the select element by its ID for breakdownType
const selectElement = document.getElementById("breakdownType");
populateSelectWithOptions(selectElement, breakdownOptions);

// Get the select element for vehicleType and the input element for vehicleNumber
const vehicleTypeSelect = document.getElementById("vehicleType");
const vehicleNumberLabel = document.querySelector('label[for="vehicleNumber"]');

// Add an event listener to the vehicleType select element
vehicleTypeSelect.addEventListener("change", function () {
  const selectedOption = vehicleTypeSelect.value;

  // Define label texts based on the selected option
  const labelMap = {
    "Truck": "Unit #:",
    "Trailer": "Trailer #:",
    "Towaway": "Serial #:",
    "Load": "Serial # / Load Type:",
    "Truck + Trailer": "Truck + Trailer #:"
  };

  // Update the label text based on the selected option
  vehicleNumberLabel.textContent = labelMap[selectedOption] || "";
});

// Array of vehicle options
const vehicleOptions = ["Truck", "Trailer", "Towaway", "Load", "Truck + Trailer"];

// Populate the vehicleType select element with options
populateSelectWithOptions(vehicleTypeSelect, vehicleOptions);



//Submit to CSV
document.getElementById('maintenanceForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Send the form data to the server
  fetch('/submit', {
    method: 'POST',
    body: new FormData(this),
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Log the server response
    // Optionally, reset the form after successful submission
    this.reset();
  })
  .catch(error => console.error('Error:', error));
});






console.log('scripts.js is running');
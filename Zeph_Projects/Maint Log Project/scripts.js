// Set the current date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('maintenanceDate').value = today;

// Array of breakdown options
const breakdownOptions = [
  "Aftertreatment",
  "Air",
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
  "Steering",
  "Suspension",
  "Tires",
  "Transmission",
  "Windshield"
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

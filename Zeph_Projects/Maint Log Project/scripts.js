// Set the current date to today
const today = new Date().toISOString().split('T')[0];
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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("maintenanceForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Serialize the form data into a URL-encoded string
      const formData = new URLSearchParams(new FormData(form));

      // Send a POST request to the server-side script
      fetch(form.action, {
          method: "POST",
          body: formData,
      })
          .then((response) => response.text())
          .then((data) => {
              alert(data); // Show a success message or handle the response as needed
              form.reset(); // Optionally, reset the form after submission
          })
          .catch((error) => {
              console.error("Error:", error);
          });
  });
});

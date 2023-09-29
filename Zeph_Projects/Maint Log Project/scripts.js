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




//TESTING THINGS

document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form
    const form = document.getElementById("maintenanceForm");

    // Add an event listener to the form for form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission behavior

      // Get form values
      const maintenanceDate = document.getElementById("maintenanceDate").value;
      const vehicleType = document.getElementById("vehicleType").value;
      const vehicleNumber = document.getElementById("vehicleNumber").value;
      const driverName = document.getElementById("driverName").value;
      const breakdownType = document.getElementById("breakdownType").value;
      const driverFault = document.getElementById("driverFault").value;
      const details = document.getElementById("details").value;
      const location = document.getElementById("location").value;
      const fixPlan = document.getElementById("fixPlan").value;

      // Create a CSV formatted string
      const csvData = `${maintenanceDate},${vehicleType},${vehicleNumber},${driverName},${breakdownType},${driverFault},${details},${location},${fixPlan}\n`;

      // Create a Blob containing the CSV data
      const blob = new Blob([csvData], { type: "text/csv" });

      // Create a download link for the Blob
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "maintenance_log.csv";

      // Simulate a click event to trigger the download
      a.click();

      // Clean up by revoking the Object URL
      URL.revokeObjectURL(url);
    });
  });




  //Server JS
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('maintenanceForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting normally

      // Get form data
      const formData = new FormData(form);

      // Convert form data to an object
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Send data to the server
      fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((message) => {
          console.log(message);
          // You can display a success message or redirect the user as needed
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });

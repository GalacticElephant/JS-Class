<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $date = $_POST["maintenanceDate"];
    $vehicleType = $_POST["vehicleType"];
    $vehicleNumber = $_POST["vehicleNumber"];
    $driverName = $_POST["driverName"];
    $breakdownType = $_POST["breakdownType"];
    $driverFault = $_POST["driverFault"];
    $details = $_POST["details"];
    $location = $_POST["location"];
    $fixPlan = $_POST["fixPlan"];

    // CSV file path
    $csvFile = "maintenance_log.csv";

    // Prepare the data as a CSV row
    $csvData = "$date,$vehicleType,$vehicleNumber,$driverName,$breakdownType,$driverFault,$details,$location,$fixPlan\n";

    // Append data to the CSV file
    file_put_contents($csvFile, $csvData, FILE_APPEND | LOCK_EX);

    // Respond with a success message
    echo "Data has been stored successfully!";
} else {
    // Handle invalid requests
    echo "Invalid request!";
}
?>

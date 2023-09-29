<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get and sanitize form data
    $date = htmlspecialchars($_POST["maintenanceDate"]);
    $vehicleType = htmlspecialchars($_POST["vehicleType"]);
    $vehicleNumber = htmlspecialchars($_POST["vehicleNumber"]);
    $driverName = htmlspecialchars($_POST["driverName"]);
    $breakdownType = htmlspecialchars($_POST["breakdownType"]);
    $driverFault = htmlspecialchars($_POST["driverFault"]);
    $details = htmlspecialchars($_POST["details"]);
    $location = htmlspecialchars($_POST["location"]);
    $fixPlan = htmlspecialchars($_POST["fixPlan"]);

    // CSV file path (adjust as needed)
    $csvFile = __DIR__ . "/maintenance_log.csv";

    // Prepare the data as a CSV row
    $csvData = "$date,$vehicleType,$vehicleNumber,$driverName,$breakdownType,$driverFault,$details,$location,$fixPlan\n";

    // Append data to the CSV file and handle errors
    if (file_put_contents($csvFile, $csvData, FILE_APPEND | LOCK_EX) !== false) {
        echo "Data has been stored successfully!";
    } else {
        echo "Error: Unable to store data.";
    }
} else {
    // Handle invalid requests
    echo "Invalid request!";
}
?>

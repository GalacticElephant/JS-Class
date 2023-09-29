<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $csvData = $_POST['csvData'];
    
    // Append the CSV data to a file on the server
    $file = fopen('maintenance_log.csv', 'a'); // 'a' for append mode
    fwrite($file, $csvData);
    fclose($file);
}
?>

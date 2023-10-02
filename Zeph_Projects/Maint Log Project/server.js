console.log('server.js is running');
const express = require('express');
const bodyParser = require('body-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 8000; 

app.use(bodyParser.urlencoded({ extended: true }));

// Define the CSV writer
const csvWriter = createCsvWriter({
  path: 'maintenance_log.csv',
  header: [
    { id: 'maintenanceDate', title: 'Date' },
    { id: 'vehicleType', title: 'Unit Type' },
    { id: 'vehicleNumber', title: 'Unit Number' },
    { id: 'driverName', title: 'Driver Name' },
    { id: 'breakdownType', title: 'Breakdown Type' },
    { id: 'driverFault', title: 'Driver Fault' },
    { id: 'details', title: 'Details' },
    { id: 'location', title: 'Location' },
    { id: 'fixPlan', title: 'Repair Plan' },
  ],
});

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;

  // Write the form data to the CSV file
  csvWriter.writeRecords([formData])
    .then(() => {
      res.send('Data saved to CSV file');
    })
    .catch((error) => {
      res.status(500).send('Error writing to CSV file');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

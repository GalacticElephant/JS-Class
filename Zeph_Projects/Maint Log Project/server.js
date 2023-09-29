const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000; // Change this to your desired port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const data = req.body;

  // Create a CSV string from the form data
  const csv = `${data.maintenanceDate},${data.vehicleType},${data.vehicleNumber},${data.driverName},${data.breakdownType},${data.driverFault},${data.details},${data.location},${data.fixPlan}\n`;

  // Append the CSV data to a file (you can modify the file path)
  fs.appendFile('maintenance_log.csv', csv, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data to CSV file');
    } else {
      res.status(200).send('Data saved to CSV file');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

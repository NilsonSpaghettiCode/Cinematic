// Dependencies
const express = require('express');
const cors = require('cors')

// Local dependencies/modules
const reservations = require('./routes/reservations')

// Instances & variables
const app = express();
const port = process.env.PORT || 5240;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/reservations', reservations);

app.listen(port, () => {
    console.log(`New Connection! ${port}`);
});

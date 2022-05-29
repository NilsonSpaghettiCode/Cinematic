// Dependencies
const express = require('express');
const cors = require('cors')
const { Models } = require('./models');

// Local dependencies/modules
const reservations = require('./routes/reservations');
const branch = require('./routes/branch');
const cinemat = require('./routes/cinemat');
const schedule = require('./routes/schedule')
const movie = require('./routes/movie')

// Instances and variables
const app = express();
const port = process.env.PORT || 5240;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/branch', branch);
app.use('/reservations', reservations);
app.use('/schedule', schedule);
app.use('/cinemat', cinemat);
app.use('/movie', movie);


app.listen(port, () => {
    console.log(`Listen on! ${port}`);
});

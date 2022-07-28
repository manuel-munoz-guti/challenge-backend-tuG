const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const reservationRoutes = require('./routes/reservationRoutes');
const clientRoutes = require('./routes/clientRoutes');
const { dbConnection } = require('./database/config');
require('dotenv').config();

PORT = process.env.PORT || 4001;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

// Public Directory
app.use( express.static('public') );

//routes
app.use('/api/v1/clients', clientRoutes);
app.use('/api/v1/reservations', reservationRoutes);

//database
dbConnection();

//webserver
app.listen(PORT , () => {
    console.log(`Server online on port ${PORT}`);
});
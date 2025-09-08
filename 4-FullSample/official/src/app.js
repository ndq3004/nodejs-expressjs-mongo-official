const express = require('express');
const morgan = require('morgan')

const app = express();

const tourRoutes = require('./api/routes/tourRoutes');

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/tours", tourRoutes);

module.exports = app;
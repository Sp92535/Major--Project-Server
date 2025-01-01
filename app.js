// ./app.js

const express = require('express');
const app = express();

// Add all middlewares here
app.use(express.json());


module.exports = app;
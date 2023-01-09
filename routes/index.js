const express = require('express');

// Import notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;

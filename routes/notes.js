const note = require('express').Router();
const { title } = require('process');
const { readFromFile, readAndAppend } = require('../helpers/fs');
const uuid = require('../helpers/uuid');

// GET Route to read the notes
note.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route to receive new note to save
note.post('/', (req, res) => {
  console.log(req.body);

  const {title, text} =  req.body

  if (req.body) {
    const newNote = {
     title,
     text,
    id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = note;

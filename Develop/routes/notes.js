const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fs');
const uuid = require('../helpers/uuid');

// GET Route to read the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route to receive new note to save
notes.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newNote = {
     title,
     text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;

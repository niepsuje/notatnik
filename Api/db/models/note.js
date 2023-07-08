const mongoose = require('mongoose');

// model notatki
const Note = mongoose.model('Note', {
    title: String,
    body: String
});


module.exports = Note;


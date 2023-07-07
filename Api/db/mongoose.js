const mongoose = require('mongoose');

// db connect
mongoose.connect('mongodb://127.0.0.1:27017/notes-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// model notatki
const Note = mongoose.model('Note', {
    title: String,
    body: String
});

// notatka testowa i zapisanie do bazy
const newNote = new Note({ 
    title: 'tytuł testowy',
    body: 'tekst naszej notatki'
});
newNote. save().then(() => {
    console.log('notatka została zapisana')
});
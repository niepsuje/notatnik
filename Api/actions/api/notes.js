
// wczytuje model notatki
const Note = require('../../db/models/note')

module.exports = {
    saveNote: (req, res) => {
        res.send('Strona główna działa!');


        // notatka testowa i zapisanie do bazy
        const newNote = new Note({ 
            title: 'tytuł testowy2',
            body: 'tekst naszej notatki'
        });
        newNote. save().then(() => {
            console.log('notatka została zapisana')
        });
    }
}
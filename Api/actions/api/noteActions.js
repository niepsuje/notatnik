// Akcje dotyczące notatek. importowane w pliku index.js

// wczytuje model notatki
const Note = require('../../db/models/note')

class NoteActions {
    saveNote(req, res) {

        // notatka testowa i zapisanie do bazy
        // const newNote = new Note({ 
        //     title: 'tytuł testowy2',
        //     body: 'tekst naszej notatki'
        // });
        // newNote. save().then(() => {
        //     console.log('notatka została zapisana')
        // });
        const title = req.body.title;
        const body = req.body.body;

        res.send('Notatka została stworzona. Tytuł: "' + title + '". Treść: "' + body + '".');
    }

    getAllNotes(req, res) {
        res.send('Pobrałem wszystkie notatki');
    }
    getNote(req, res) {
        res.send('info o notatce');
    }
    updateNote(req, res) {
        res.send('Notatka zaktualizowana');
    }
    deleteNote(req, res) {
        const id = req.params.id;
        res.send('Notatka usunięta. ID: ' + id);
    }
}

module.exports = new NoteActions;
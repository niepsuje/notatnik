// Akcje dotyczące notatek. importowane w pliku index.js

// wczytuje model notatki
const Note = require('../../db/models/note')

class NoteActions {
    
    async saveNote(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        
        let note;

        // notatka testowa i zapisanie do bazy
        try {
            note = new Note({ title, body });
            await note.save().then(() => {
                console.log('notatka została zapisana')
            });
        } catch (err) {
            return res.status(200).json({ message: err.message });
        }

        res.status(201).json(note);
    }

    async getAllNotes(req, res) {
        const doc = await Note.find({});
            res.status(200).json(doc);
            console.log('Pobieram wszystkie notatki');
            //res.send('Pobrałem wszystkie notatki');

    }
    async getNote(req, res) {
        const id = req.params.id;
        const note = await Note.findOne({_id: id});

        res.status(200).json(note);
    }
    async updateNote(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;

        const note = await Note.findOne({ _id: id });
        note.title = title;
        note.body = body;
        await note.save();

        res.status(201).json(note);
    }
    async deleteNote(req, res) {
        const id = req.params.id;
        await Note.deleteOne({ _id: id });

        res.sendStatus(204);
    }
}

module.exports = new NoteActions;
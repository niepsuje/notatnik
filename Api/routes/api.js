const express = require('express');
const router = express.Router();

const noteAction = require('../actions/api/notes');


// pobieranie notatek
router.get('/notes', noteAction.getAllNotes);
// pobieranie notatki
router.get('/notes/:id', noteAction.getNote);
// zapisywanie notatki
router.post('/notes/', noteAction.saveNote);
// edytowanie notatek
router.put('/notes/:id', noteAction.updateNote);
// usuwanie notatek
router.delete('/notes/:id', noteAction.deleteNote);



module.exports = router;
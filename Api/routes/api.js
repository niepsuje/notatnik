const express = require('express');
const router = express.Router();

const noteAction = require('../actions/api/notes');

router.get('/', noteAction.saveNote);

module.exports = router;
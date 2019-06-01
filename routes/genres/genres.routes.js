const express = require('express');
const router = express.Router();

const genresController = require('../../controllers/genresController');
router.get('/', genresController.genre_list);

module.exports = router;
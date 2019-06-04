const express = require('express');
const router = express.Router();

const authorController = require('../../controllers/authorController');
router.get('/', authorController.author_list);
router.post('/', authorController.createAuthor);

module.exports = router;
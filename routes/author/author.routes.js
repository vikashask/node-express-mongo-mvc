const express = require('express');
const router = express.Router();

const authorController = require('../../controllers/authorController');
router.get('/', authorController.author_list);

module.exports = router;
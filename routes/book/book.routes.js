const express = require('express');
const router = express.Router();

const bookController = require('../../controllers/bookController');
router.get('/', bookController.book_list);

module.exports = router;
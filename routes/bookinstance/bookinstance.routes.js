const express = require('express');
const router = express.Router();

const bookinstanceController = require('../../controllers/bookinstanceController');
router.get('/', bookinstanceController.bookinstance_list);

module.exports = router;
const express = require('express');
const router = express.Router();

const userRoutes = require('./user/user.routes');
const bookRoutes = require('./book/book.routes');
const authorsRoutes = require('./author/author.routes');

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/authors', authorsRoutes);
module.exports = router;

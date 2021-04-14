const express = require("express");
const router = express.Router();

const genresController = require("../../controllers/genresController");
router.get("/", genresController.genre_list);
router.post("/", genresController.create_genre);

module.exports = router;

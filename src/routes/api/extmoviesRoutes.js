const express = require('express');
const router = express.Router();
const externalMoviesController = require('../../controllers/api/extmoviesController');

// Ruta para obtener datos de una película desde la API externa
router.get('/external-movies/:title', externalMoviesController.getMovieData);

module.exports = router;
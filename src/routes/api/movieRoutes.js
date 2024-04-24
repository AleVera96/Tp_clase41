const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.delete('/movies/delete/:id', moviesController.destroy);
router.post('/movies/create', moviesController.create);
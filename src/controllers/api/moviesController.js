const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const fetch = require("node-fetch")

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
create: function (req,res) {
    Movies
    .create(
        {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }
    )
    .then(() => {
        res.status(201).json({ message: 'Película creada exitosamente' });
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
    },
    
    destroy: function (req, res) {
        let movieId = req.params.id;
        Movies.destroy({ where: { id: movieId }, force: true })
        .then(() => {
          res.status(200).json({ message: 'Película eliminada exitosamente' });
        })
        .catch(error => {
          res.status(500).json({ error: error.message });
        });
      }
    };

    module.exports = moviesController

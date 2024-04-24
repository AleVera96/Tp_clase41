const fetch = require('node-fetch');

const externalMoviesController = {
  getMovieData: async function (req, res) {
    const movieTitle = req.params.title;

    try {
      // Realizar la solicitud a la API de OMDB
      const response = await fetch.get(`http://www.omdbapi.com/?apikey=your_api_key&t=${movieTitle}`);

      // Verificar si la película fue encontrada en la API
      if (response.data.Response === 'True') {
        // La película fue encontrada, devolver los datos
        return res.json(response.data);
      } else {
        // La película no fue encontrada en la API
        return res.status(404).json({ error: 'Movie not found' });
      }
    } catch (error) {
      // Manejar cualquier error de la solicitud a la API
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = externalMoviesController;
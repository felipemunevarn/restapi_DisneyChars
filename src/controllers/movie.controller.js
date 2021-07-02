const Movies = require('../models/movies');

async function createMovie(req, res) {
  const { image, title, year, ranking, gender } = req.body;
  try {
    let newMovie = await Movies.create({
      image: image,
      title: title,
      year: year,
      ranking:ranking,
      gender: gender
    });
    if (newMovie) {
      return res.json({
        message: 'Movie created succesfully',
        data: newMovie
      });
    }
  } catch (e){
    console.log(e);
    res.status(500).json({
      message: 'Something goes wrong!',
      data: {}
    })
  }
}

async function getMovies(req, res) {
  try {
    if (Object.keys(req.query).length === 0){
      const movies = await Movies.findAll({
        attributes: ['image', 'title', 'year']
      });
      res.json({
        data: movies
      });
    } else {
      const key = Object.keys(req.query)[0];
      const movie = await Movies.findOne({
        where: {
        [key]: req.query[key]
        }
      });
      res.json({
        data: movie
      });
    }
  } catch(e) {
    console.log(e);
  }
}

async function deleteOneMovie(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Movies.destroy({
      where: {
        id_movie: id
      }
    });
    res.json({
      message: 'Movie deleted succesfully!',
      count: deleteRowCount
    });
  } catch (e) {
    console.log(e);
  }
}

async function getOneMovie(req, res) {
  try {
    const { id } = req.params;
    const movie = await Movies.findOne({
      where: {
        id_movie: id
      }
    });
    res.json(movie);
  } catch (e) {
    console.log(e);
  }
}

async function updateMovie(req, res) {
  try {
    const { image, title, year, ranking, gender } = req.body;
    const { id } = req.params;
    const movies = await Movies.findAll({
      attributes: ['id_movie', 'image', 'title', 'year', 'ranking', 'gender'],
      where: {
        id_movie: id
      }
    });
    if(movies.length > 0) {
      movies.forEach(async movie => {
        await movie.update({
          image: image,
          title: title,
          year: year,
          ranking:ranking,
          gender: gender
        });
      });
    }
    return res.json({
      message: 'Movie updated succesfully',
      data: movies
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  createMovie: createMovie,
  getMovies: getMovies,
  getOneMovie: getOneMovie,
  deleteOneMovie: deleteOneMovie,
  updateMovie: updateMovie
}

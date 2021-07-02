const { Router } = require('express');
const router = Router();

const {
  createMovie,
  getMovies,
  getOneMovie,
  deleteOneMovie,
  updateMovie,
} = require('../../controllers/movie.controller');

router.get('/', getMovies);
router.get('/:id', getOneMovie);
router.post('/', createMovie);
router.delete('/:id', deleteOneMovie);
router.put('/:id', updateMovie);

module.exports = router;

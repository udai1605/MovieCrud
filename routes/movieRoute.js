const { Router } = require('express');
const { getAllMovies, getById, insertMovie, updateMovie, deleteMovie } = require('../Controllers/movieController');
const router = new Router();


//to get all the movies
router.get('/', getAllMovies);

//to get movie by id
router.get('/:id', getById)

//to upload a movies
router.post('/create', insertMovie)

//to update a movie
router.put('/:id', updateMovie)

//to delete a movie
router.delete('/:id', deleteMovie)

module.exports = router;
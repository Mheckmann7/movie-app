const router = require('express').Router(); 
const moviesCtrl = require('../../controllers/movies');

router.get('/movies', moviesCtrl.getMovies);
router.post('/movies/favorites', moviesCtrl.addFavorite);

module.exports = router; 
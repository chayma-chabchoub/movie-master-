const express = require('express')
const router = express.Router()
const {addMovie,getMovies,deleteMovie, updateMovie}=require('../controllers/movieControllers')
const authMiddleware = require('../middlewares/authMiddleware')
// const { addmovie } = require('../../client/src/redux/slices/movieSlice')


router.post('/addmovie', authMiddleware , addMovie)
router.get('/getmovies', authMiddleware , getMovies)
router.delete('/deletemovie/:id', authMiddleware , deleteMovie)
router.put('/updatemovie/:id', authMiddleware , updateMovie)


module.exports = router
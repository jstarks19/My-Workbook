const mongoose = require('mongoose');
const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();
// route: /movie/
router.get('/', async (req, res) => {
    let movies = await Movie.find({});
    res.render('movies/index', {movies});
});


router.get('/:id', async (req, res) => {
    let movie = await Movie.findById(req.params.id);
    res.render('movies/show', {movie});
});

module.exports = router;
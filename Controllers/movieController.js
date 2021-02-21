const mongoose = require('mongoose');
require("../models/movieModel.js");
const Movie = mongoose.model("Movie");
//Read Operation
const getAllMovies = async(req, res, next) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

//Read By Id
const getById = async(req, res, next) => {
        try {
            const id = req.params.id;
            const movie = await Movie.findById(id);
            res.status(200).json(movie);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
    //Create Operation
const insertMovie = async(req, res, next) => {
    try {
        const {
            title,
            hero,
            heroine
        } = req.body;
        const newMovie = new Movie({
            title,
            hero,
            heroine
        });
        await newMovie.save();
        res.status(200).json(newMovie)
    } catch (err) {
        console.log(err);
        next(err);
    }
}

//Update Operation
const updateMovie = async(req, res, next) => {
    try {
        const id = req.params.id;
        const prevMovie = await Movie.findById(id)
        if (prevMovie) {
            prevMovie.title = req.body.title || prevMovie.title
            prevMovie.hero = req.body.hero || prevMovie.hero
            prevMovie.heroine = req.body.heroine || prevMovie.heroine
        }
        const updatedUser = await prevMovie.save()
        const { title, hero, heroine } = updatedUser
        res.status(200).json({ title, hero, heroine });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

//Delete Operation
const deleteMovie = async(req, res, next) => {
    try {
        const id = req.params.id;
        const title = await findById(id).populate('title');
        await Movie.findByIdAndDelete(id);
        res.status(200).json({
            message: `The Movie ${title.title} was deleted Successfully`
        })
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = { getAllMovies, getById, insertMovie, updateMovie, deleteMovie }
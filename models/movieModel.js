const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    hero: String,
    heroine: String,
});

mongoose.model("Movie", MovieSchema);
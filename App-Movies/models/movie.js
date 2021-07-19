const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    imgId: {
        type: String,
        required: true,
    },
    // actors: {
    //     type: [String],
    //     required: false,
    // },
})

module.exports = mongoose.model('Movie', movieSchema);
"use strict"

const mongoose = require('mongoose');
const path = require("path");
const fs = require("fs");
const Movie = require('../models/movie');

mongoose.connect("mongodb://localhost:27017/movie-app", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
})
    .then(() => {
        console.log("Connected to Movie Database");
    })
    .catch((err) => {
        console.log("Failed to Connect to Database");
        console.log(err);
    });



const seedData = async () => {
    await Movie.deleteMany({});
    let rawdata = fs.readFileSync('./movie-data.json');
    const finalObj = JSON.parse(rawdata);
    for (const {title, year, description, genre, rating, id} of finalObj) {
        let movieToAdd = new Movie({ title, year, description, genre, rating, imgId: id});
        try {
            await movieToAdd.save();
        } catch (e) {
            console.error(e);
        }
    }
    console.log('Done Adding Movies...');
}


seedData().then(mongoose.connection.close()); 

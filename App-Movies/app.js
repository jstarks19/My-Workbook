
"use strict"

const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require("path");
const app = express();


// Routers
const movieRouter = require('./routes/movieRouter.js');


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



app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use('/images', express.static('images')); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



// Root
app.get('/', (req, res) => {
    res.render('index');
});


app.use('/movie', movieRouter);

// Error
app.get('/*' , (req, res) => {
    res.render('error');
});


app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});




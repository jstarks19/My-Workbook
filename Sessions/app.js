
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')

const csurf = require('csurf');
const csurfProtection = csurf({cookie: {httpOnly: true}});

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET,
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: null },
    resave: false,
    saveUninitialized: false
}));

app.use(csurf());

app.get('/', (req, res) => {
    res.cookie('Jason', 'Starkey', {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 10
    })
    console.log(req.cookies);
    res.send('Hello, World!');
})


app.listen(3000, ()=>console.log(`Listening on port 3000`));
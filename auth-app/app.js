const express = require('express');
const session = require('express-session');


var app = express();

app.use(session({
    secret: 'wild-wacky-wonderful',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // secure: true,
        httpOnly: true,
        maxAge: 1000 * 60
    }
}))

app.get('/', (req,res) => {
    res.send('Hsdsdi');
});


app.listen(3000);







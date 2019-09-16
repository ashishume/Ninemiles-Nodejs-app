const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const userRoutes = require('./api/routes/user');
const questionRoutes = require('./api/routes/questions');
const testsRoutes = require('./api/routes/tests');
const contentsRoutes = require('./api/routes/contents');
const marksSheetRoutes = require('./api/routes/marksSheet');
const defaultRoutes = require('./api/routes/default')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {    //CORS 

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET,PATCH,DELETE');
    res.header('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
    next();
});


// app.get('/favicon.ico', (req, res) => {return null});


mongoose.connect(
    "mongodb+srv://ninemilesmocks:Ninemiles1@@ielts-company-a4v0x.mongodb.net/ninemiles-database?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);


//routes to the respective models

app.use('/', defaultRoutes)
app.use('/user', userRoutes);
app.use('/tests', testsRoutes);
app.use('/contents', contentsRoutes);
app.use('/questions', questionRoutes);
app.use('/marks', marksSheetRoutes);
app.all('*', function (req, res) {
    throw new Error("Bad request")
})
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
});


app.use((error, req, res, next) => {
    return res.status(error.status || 500).json({
        message: error.message
    });

});
module.exports = app;
var express = require('express'),
    path = require('path'),
    app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.enable('view cache');

app.use( function (req, res, next) {
    res.render('index');
});

app.use(function (req, res, next) {
    console.error(`сработало 404 на url ${req.url}`);
    res.redirect(`/notfound?url=${req.url}`);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    err.d = 1;
    res.status(500);
    res.render('error',err);
});
module.exports = app;
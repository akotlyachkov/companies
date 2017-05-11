const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    config = require('./config'),
    web = require('./web'),
    api = require('./api');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());

//app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'web/build')));
app.use(express.static(path.join(__dirname,'web/favicon')));
//app.use(express.static(path.join(__dirname,'web/application')));
//app.use(express.static(__dirname));

app.use('/api', api);
app.use('/', web);
app.set('port', process.env.PORT || config.system.port || '3000');

server.listen(app.get('port'), function () {
    console.log('Приложение запущено на порту http://localhost:' + app.get('port'));
});

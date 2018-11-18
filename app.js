const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');
i18n.configure({
    locales: ['en', 'id'],
    directory: __dirname + '/locales',
    defaultLocales: 'en',
    register: global
});
const config = require('./config');
const db = require('./db');
// db.db.sync();
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(i18n.init);
app.use('/api', require('./routers/apiCore'));
app.use('/api/user', require('./routers/apiUser'));
app.listen(config.server.port);
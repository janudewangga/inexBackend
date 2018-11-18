const express = require('express');
const app = express();
const config = require('./config');
app.listen(config.server.port, function () {
    console.log('Backend listening on port: ' + config.server.port + '.');
});
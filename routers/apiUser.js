const express = require('express');
const router = express.Router();
const config = require('../config');
const db = require('../db');
const helpers = require('../helpers');
router.get('/get', function (req, res) {
    let dbQuery = {
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt'],
            order: [['status', 'asc'], ['name', 'asc']],
            raw: true,
            nest: true
        }
    };
    db.User.findAll(dbQuery).then(dataUsers => {
        res.json(helpers.jsonResultGenerator(true, 0, dataUsers));
    });
});
module.exports = router;
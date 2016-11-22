var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/', function (req, res, next) {
    res.json({id: 1, name:'Project 1'});
});

module.exports = router;

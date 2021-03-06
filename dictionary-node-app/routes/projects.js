var express = require('express');
var mongoose = require('mongoose');
var project = require('../models/project');
var router = express.Router();
var Project = mongoose.model('Project');

router.get('/', function (req, res) {
    Project.find().sort('date').exec(function (err,data) {
        if (err) {
            res.send(404, err);
            return;
        }
        res.json(data);
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;

    Project.findOne( {'_id' : id }, function(err, data){
        if (err) {
            res.send(404, err);
            return;
        }
        res.json(data);
    });
});

router.post('/', function (req, res) {
    Project.create(req.body, function (err) {
        if (err) {
            res.send(401, err);
            return;
        }
        res.send(req.body);
    });
});

module.exports = router;

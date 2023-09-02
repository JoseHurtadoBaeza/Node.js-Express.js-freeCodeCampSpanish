const express = require('express');

const {math} = require('../data/courses.js').coursesInfo;

const routerMaths = express.Router();

routerMaths.get('/', (req, res) => {
    res.json(math);
});

routerMaths.get('/:topic', (req, res) => {
    const topic = req.params.topic;
    const results = math.filter(course => course.topic === topic);

    if (results.length === 0){
        return res.status(204).send(`No courses found about ${topic}.`);
    }

    res.json(results);

});

module.exports = routerMaths;
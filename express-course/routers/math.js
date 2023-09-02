const express = require('express');

const {math} = require('../data/courses.js').coursesInfo;

const routerMaths = express.Router();

routerMaths.get('/', (req, res) => {
    res.send(JSON.stringify(math));
});

routerMaths.get('/:topic', (req, res) => {
    const topic = req.params.topic;
    const results = math.filter(course => course.topic === topic);

    if (results.length === 0){
        return res.status(404).send(`No courses found about ${topic}.`);
    }

    res.send(JSON.stringify(results));

});

module.exports = routerMaths;
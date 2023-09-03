const express = require('express');

const {math} = require('../data/courses.js').coursesInfo;

const routerMaths = express.Router();

// Middleware
routerMaths.use(express.json()); // This allow us to process the body request in JSON format and working with this body request in the code

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

routerMaths.post('/', (req, res) => {
    let newCourse = req.body;
    math.push(newCourse);
    res.json(math);
});

routerMaths.put('/:id', (req, res) => {
    
    const updatedCourse = req.body;
    const id = req.params.id;

    const index = math.findIndex(course => course.id == id);

    if (index >= 0) {
        math[index] = updatedCourse;
    } else {
        res.status(404);
    }

    res.json(math);

});

routerMaths.patch('/:id', (req, res) => {

    const updatedInfo = req.body;
    const id = req.params.id;

    const index = math.findIndex(course => course.id == id);

    if (index >= 0) {
        const courseToModify = math[index];
        Object.assign(courseToModify, updatedInfo);
    } else {
        res.status(404);
    }

    res.json(math);

});

routerMaths.delete('/:id', (req, res) => {
    const id = req.params.id;

    const index = math.findIndex(course => course.id == id);

    if (index >= 0){
        math.splice(index, 1); // Cut the array in the index and remove that element
    } else {
        res.status(404);
    }

    res.json(math);

});

module.exports = routerMaths;
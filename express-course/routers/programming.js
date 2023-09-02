const express = require('express');

const {programming} = require('../data/courses.js').coursesInfo;

const routerProgramming = express.Router();

// Middleware
routerProgramming.use(express.json()); // This allow us to process the body request in JSON format and working with this body request in the code

routerProgramming.get('/', (req, res) => {
    res.json(programming);
});

routerProgramming.get('/:language', (req, res) => {
    const language = req.params.language;
    const results = programming.filter(course => course.language === language);

    if (results.length === 0){
        return res.status(204).send(`No courses found about ${language}.`);
    } 

    if (req.query.order === 'views') {
        return res.send(results.sort((a, b) => a.views - b.views));
    } 

    //console.log(req.query.order);

    res.json(results); // Default 200 OK, it is not necessary to specify
});

routerProgramming.get('/:language/:level', (req, res) => {
    const language = req.params.language;
    const level = req.params.level;

    const results = programming.filter(course => course.language === language && course.level === level);

    if (results.length === 0){
        return res.status(204).send(`No courses found about ${language} with level ${level}`);
        //return res.status(404).end();
    }

    res.json(results);

});

routerProgramming.post('/', (req, res) => {
    let newCourse = req.body;
    programming.push(newCourse);
    res.json(programming);
});

routerProgramming.put('/:id', (req, res) => {
    const updatedCourse = req.body;
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id);

    if (index >= 0) {
        programming[index] = updatedCourse;
    } else {
        res.status(404);
    }

    res.json(programming);

});

routerProgramming.patch('/:id', (req, res) => {

    const updatedInfo = req.body;
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id);

    if (index >= 0) {
        const courseToModify = programming[index];
        Object.assign(courseToModify, updatedInfo);
    } else {
        res.status(404);
    }

    res.json(programming);

});

routerProgramming.delete('/:id', (req, res) => {
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id);

    if (index >= 0){
        programming.splice(index, 1); // Cut the array in the index and remove that element
    } else {
        res.status(404);
    }

    res.json(programming);

});

module.exports = routerProgramming;
const express = require('express');

const {programming} = require('../data/courses.js').coursesInfo;

const routerProgramming = express.Router();

routerProgramming.get('/', (req, res) => {
    res.send(JSON.stringify(programming));
});

routerProgramming.get('/:language', (req, res) => {
    const language = req.params.language;
    const results = programming.filter(course => course.language === language);

    if (results.length === 0){
        return res.status(404).send(`No courses found about ${language}.`);
    } 

    if (req.query.order === 'views') {
        return res.send(JSON.stringify(results.sort((a, b) => a.views - b.views)));
    } 

    res.send(JSON.stringify(results));

    //console.log(req.query.order);

    res.send(JSON.stringify(results)); // Default 200 OK, it is not necessary to specify
});

routerProgramming.get('/:language/:level', (req, res) => {
    const language = req.params.language;
    const level = req.params.level;

    const results = programming.filter(course => course.language === language && course.level === level);

    if (results.length === 0){
        return res.status(404).send(`No courses found about ${language} with level ${level}`);
    }

    res.send(JSON.stringify(results));

});

module.exports = routerProgramming;
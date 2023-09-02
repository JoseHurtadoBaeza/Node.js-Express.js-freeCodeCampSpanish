const express = require('express');
const app = express();

const {coursesInfo} = require('./courses.js');

console.log(coursesInfo);

// Routers

const routerProgramming = express.Router();
app.use('/api/courses/programming', routerProgramming);

const routerMaths = express.Router();
app.use('/api/courses/math', routerMaths);


// Routing

app.get('/', (req, res) => {
    res.send('My first server with Express. Courses 💻.');
});

app.get('/api/courses', (req, res) => {
    res.send(JSON.stringify(coursesInfo));
});

// Programming

routerProgramming.get('/', (req, res) => {
    res.send(JSON.stringify(coursesInfo.programming));
});

routerProgramming.get('/:language', (req, res) => {
    const language = req.params.language;
    const results = coursesInfo.programming.filter(course => course.language === language);

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

    const results = coursesInfo.programming.filter(course => course.language === language && course.level === level);

    if (results.length === 0){
        return res.status(404).send(`No courses found about ${language} with level ${level}`);
    }

    res.send(JSON.stringify(results));

});

// Maths

routerMaths.get('/', (req, res) => {
    res.send(JSON.stringify(coursesInfo.math));
});

routerMaths.get('/:topic', (req, res) => {
    const topic = req.params.topic;
    const results = coursesInfo.math.filter(course => course.topic === topic);

    if (results.length === 0){
        return res.status(404).send(`No courses found about ${topic}.`);
    }

    res.send(JSON.stringify(results));

});

const PORT = process.env.PORT || 3000; // The first option is for the hosting port provided

app.listen(PORT, () => {
    console.log(`The server is listening in the port ${PORT}`);
});
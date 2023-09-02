const express = require('express');
const app = express();

const {coursesInfo} = require('./data/courses.js');

console.log(coursesInfo);

// Routers

const routerProgramming = require('./routers/programming.js');
app.use('/api/courses/programming', routerProgramming);

const routerMaths = require('./routers/math.js');
app.use('/api/courses/math', routerMaths);

// Routing

app.get('/', (req, res) => {
    res.send('My first server with Express. Courses 💻.');
});

app.get('/api/courses', (req, res) => {
    res.send(JSON.stringify(coursesInfo));
});

// Programming

// Maths

const PORT = process.env.PORT || 3000; // The first option is for the hosting port provided

app.listen(PORT, () => {
    console.log(`The server is listening in the port ${PORT}`);
});
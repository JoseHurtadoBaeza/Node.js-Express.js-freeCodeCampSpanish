const express = require('express');
const app = express();

const {coursesInfo} = require('./courses.js');

console.log(coursesInfo);

// Routing

app.get('/', (req, res) => {
    res.send('My first server with Express. Courses 💻.');
});

const PORT = process.env.PORT || 3000; // The first option is for the hosting port provided

app.listen(PORT, () => {
    console.log(`The server is listening in the port ${PORT}`);
});
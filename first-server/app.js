const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, world'); // Allow us send the response to the clients
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}...`);
});
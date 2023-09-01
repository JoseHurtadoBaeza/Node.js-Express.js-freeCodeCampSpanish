const http = require('http');

const server = http.createServer((req, res) => {
    res.end('I am learning Node.js');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`The server is listening in the port ${PORT}`);
});
const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('===> req (request)');
//     //console.log(req);
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);
//     res.end('Hello, world');
// });

const server = http.createServer((req, res) => {
    console.log('===> res (response)');
    //console.log(res);
    console.log(res.statusCode); // 200 OK
    
    // res.statusCode = 404;

    // console.log(res.statusCode); // 404 Not Found

    // Configure the header
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());

    res.end('Hello, world');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server listening in port ${port}...`);
})
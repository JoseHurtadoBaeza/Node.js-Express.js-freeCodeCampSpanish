const http = require('http');
const courses = require('./courses.js');

const server = http.createServer((req, res) => {

    const {method} = req; // Extract the request method. We use destructuring syntax.

    switch(method) {
        case 'GET':
            return handleGETrequest(req, res);
        case 'POST':
            return handlePOSTrequest(req, res);
        default:
            res.statusCode = 501;
            res.end(`The method can't be handle by the server: ${method}`);
    }

}); 

function handleGETrequest(req, res){

    const path = req.url;

    console.log(res.statusCode); // 200 OK

    if (path === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        //res.statusCode = 200;
        return res.end('Welcome to my first server and API created with Node.js');
    } else if (path === '/courses'){
        //res.statusCode = 200;
        return res.end(JSON.stringify(courses.coursesInfo));
    } else if (path === '/courses/programming'){
        //res.statusCode = 200;
        return res.end(JSON.stringify(courses.coursesInfo.programming));
    }

    res.statusCode = 404;
    return res.end('The resource requested does not exists...');

}

function handlePOSTrequest(req, res){

    const path = req.url;

    if (path === '/courses/programming'){        
        
        //res.statusCode = 200;

        let body = '';

        req.on('data', content => { // When data event happen
            body += content.toString();
        });
        
        req.on('end', () => { // When the information is finished being received
            console.log(body);
            console.log(typeof body);

            // Convert to a JavaScript object
            body = JSON.parse(body);

            console.log(typeof body);

            console.log(body.title);

            res.end('The server received a POST request for /cursos/programming');
        })

        res.end('The server received a POST request for /courses/programming');
    }

}

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
});
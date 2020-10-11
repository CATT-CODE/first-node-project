const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(`Looking for route: ${request.url}`);

    if (request.url === '/') {
        response.writeHead(200, {'content-type': 'text/html'});
        const readStream = fs.createReadStream(__dirname + '/index.html');
        readStream.pipe(response);

    } else if (request.url === '/about') {
        response.writeHead(200, {'content-type': 'text/html'});
        const readStream = fs.createReadStream(__dirname + '/about.html');
        readStream.pipe(response);

    } else if (request.url === '/users') {
        response.writeHead(200, {'content-type': 'application/json'});

        const obj = [
            {
                name: 'Flo',
                email: 'flo@me.com',
            },
            {
                name: 'Josh',
                email: 'josh@me.com',
            },
        ];

        response.end(JSON.stringify(obj));

    } else if (request.url === '/text') {
        response.writeHead(200, {'content-type': 'text/plain'});
        const readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
        readStream.pipe(response);
        
    } else {
        response.writeHead(404, {'content-type': 'text/plain'});
        const readStream = fs.createReadStream(__dirname + '/four0four.txt', 'utf8');
        readStream.pipe(response)
        
    }
});


server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
import { createServer } from 'http';

const port = 3000;

createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, '127.0.0.1');

console.log("Server running at http://localhost:3000");
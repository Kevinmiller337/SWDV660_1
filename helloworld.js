var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Earth\n');
}).listen(3333);
console.log('Server running');

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // Add the Content-Type header
  res.end('Hello World!');
});

server.listen(3000);
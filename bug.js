const http = require('http');

const server = http.createServer((req, res) => {
  // Without a proper content-type header, the response might not be handled correctly by the browser
  res.end('Hello World!');
});

server.listen(3000);
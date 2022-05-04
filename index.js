const http = require('http');
demo = require('secret-module');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  demo.printMsg();
});

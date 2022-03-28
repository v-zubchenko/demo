const http = require('http');


http.createServer((req, res) => {
  console.log('good');
  res.end('hello')
}).listen(3000)

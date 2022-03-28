const http = require('http');


http.createServer((req, res) => {
  console.log('good');
  res.end('asdsadasd')
}).listen(3000)

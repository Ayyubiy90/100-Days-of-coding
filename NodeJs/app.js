const http = require('http');

const server = http.createServer();

server.listen(3000);

// amazon.com => send request to Amazon's server
// amazon.com:80 or 443 are the defaults... 
const http = require('node:http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ revision: 'v2', method: req.method, path: req.url }) + '\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`listening on 0.0.0.0:${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
  server.closeIdleConnections();
});

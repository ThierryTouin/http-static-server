var http = require('http');
const port = process.argv[2] || 8000;

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./public/");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(parseInt(port));

console.log(`Server listening on port ${port}`);

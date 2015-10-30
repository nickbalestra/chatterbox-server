/* Import node's http module: */
var http = require("http");
var handleRequest = require("./request-handler");


// Every server needs to listen on a port with a unique number. The
// standard port for HTTP servers is port 80, but that port is
// normally already claimed by another server and/or not accessible
// so we'll use a standard testing port like 3000, other common development
// ports are 8080 and 1337.
var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(handleRequest);
server.listen(port, ip);

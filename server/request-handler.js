/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var url = require('url');
var utils = require('./utils');
var fs = require('fs');



// The routes hash maps registered endpoint URLs
// with their relative handler modules.
var routes = {
  '/1/classes/chatterbox/' : require('./endPoints/messages')
};

var MIME = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  gif: 'image/gif'
}

// The router module check the url of the request
// against the routes hash and route the request to its
// relative handler. If the requested endpoint
// isn't a valid registered route a 404
// reponse will be sent back instead.
module.exports = function(request, response) {
  var pathname = url.parse(request.url).pathname;
  var routeHandler = routes[pathname];
  var isFile = pathname.match(/^.*\.(html|css|js|gif)$/);
  var fileToServe = (isFile) ? isFile[0] : 'index.html';
  var contentType = (isFile) ? MIME[isFile[1]] : MIME.html;

  if (routeHandler){
    routeHandler.requestHandler(request, response);
  } else if (isFile || pathname === '/') {
    utils.sendFileContent(response, "client/" + fileToServe, contentType);

  } else {
    utils.respond(response, 'Oups', 404);
  }
};

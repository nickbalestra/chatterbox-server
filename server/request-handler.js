
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
// For get request on '/' or for any filetype suppoert in the MIME hash
// serve the static app and the relative files 
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

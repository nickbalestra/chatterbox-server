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

var url = require('url');
var utils = require('./utils');


// The routes hash maps registered endpoint URLs
// with their relative handler modules.
var routes = {
  '/1/classes/chatterbox/' : require('./endPoints/messages')
};

// The router module check the url of the request
// against the routes hash and route the request to its
// relative handler. If the requested endpoint
// isn't a valid registered route a 404
// reponse will be sent back instead.
module.exports = function(request, response) {
  var routeHandler = routes[url.parse(request.url).pathname];
  if (routeHandler){
    routeHandler.requestHandler(request, response);
  } else {
    utils.respond(response, 'Oups', 404);
  }
};

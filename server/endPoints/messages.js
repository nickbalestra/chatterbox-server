var utils = require('../utils');

var actions = {
    'GET': function(request, response){
      utils.respond(response, 'Pong');
    }
    // 'POST': function(request, response){},
    // 'PUT': function(request, response){},
    // 'DELETE': function(request, response){},
    // 'OPTIONS': function(request, response){}
};

exports.requestHandler = utils.actionDispatcher(actions);

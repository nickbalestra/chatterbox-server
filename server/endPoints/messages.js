var utils = require('../utils');
var storage = require('../storage');

var actions = {
    'GET': function(request, response){
      storage.get(function(data){
        utils.respond(response, data);
      });
      
    },
    'POST': function(request, response){
      utils.fetchData(request, function(data){
        console.log(data);
        data.objectId = utils.generateUUID();
        storage.set(data, function(foo){
          utils.respond(response, data);
        });

      });
    
    },
    // 'PUT': function(request, response){},
    // 'DELETE': function(request, response){},
    'OPTIONS': function(request, response){
      utils.respond(response, _storage);
    }
};

exports.requestHandler = utils.actionDispatcher(actions);

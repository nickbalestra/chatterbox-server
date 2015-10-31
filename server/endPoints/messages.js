var utils = require('../utils');
var storage = require('../storage');
var uuid = require('node-uuid');

var actions = {
    'GET': function(request, response){
      storage.get(function(data){
        utils.respond(response, data);
      });
      
    },
    'POST': function(request, response){
      utils.fetchData(request, function(data){
        console.log(data);
        data.objectId = uuid.v1();
        storage.set(data, function(foo){
          utils.respond(response, data);
        });

      });
    
    },
    'OPTIONS': function(request, response){
      utils.respond(response, _storage);
    }
    // 'PUT': function(request, response){},
    // 'DELETE': function(request, response){},
};

exports.requestHandler = utils.actionDispatcher(actions);

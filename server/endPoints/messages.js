var utils = require('../utils');
var _messages = [
  {
    username: 'Nick',
    text: 'Hello world',
    roomname: 'lobby',
    objectId: 'cyBvI9svAF'
    // createdAt: '2015-10-27T21:38:45.333Z',
    // updatedAt: '2015-10-27T21:38:45.333Z'
  },
  {
    username: 'Nick',
    text: 'So cool to be here',
    roomname: 'lobby',
    objectId: 'cyBvIfsdsvAF'
    // createdAt: '2015-10-27T21:38:45.333Z',
    // updatedAt: '2015-10-27T21:38:45.333Z'
  }
]
var _storage = {results: _messages};


var actions = {
    'GET': function(request, response){
      utils.respond(response, _storage);
    },
    'POST': function(request, response){
      utils.fetchData(request, function(data){
        data.objectId = utils.generateUUID();
        data.roomname = 'lobby';
        _messages.push(data);
      });
      utils.respond(response, _storage);
    },
    // 'PUT': function(request, response){},
    // 'DELETE': function(request, response){},

    'OPTIONS': function(request, response){
      utils.respond(response, _storage);
    }
};

exports.requestHandler = utils.actionDispatcher(actions);

var Message = Backbone.Model.extend({

  url : 'http://127.0.0.1:3000/1/classes/chatterbox/',

  defaults: {
    username: '',
    text: ''
  }
  
});

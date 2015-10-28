var Messages = Backbone.Collection.extend({

  model: Message,
  url : 'http://127.0.0.1:3000/1/classes/chatterbox/',

  load: function(){
    this.fetch({data: {order: '-createdAt'}});
  },

  parse: function(response, options) {
    return response.results;
    // TODO: implement api query for the endopint to orded message by creation timestamp
    // return response.results.reverse();
  }
});

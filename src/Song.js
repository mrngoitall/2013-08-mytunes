var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(song) {
    this.trigger('addToQueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }
});

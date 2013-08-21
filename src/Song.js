var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(song) {
    this.trigger('enqueue', this);
  }

});

var Song = Backbone.Model.extend({
  initialize: function() {
    this.set('counter',0);
  },

  play: function(){
    this.set('counter',(this.get('counter')+1));
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended',this);
  }
});

var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function(params) {
    params.collection.on('add remove', this.render, this);
  },
  setSongQueue: function(songqueue) {
    this.model = songqueue;
    this.render();
  },
  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.libraryView =  new LibraryView({collection: this.model.get('library')});
    this.model.on('change:currentSong', function(model){
      this.libraryView.render();
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },
  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.songQueueView.render(),
      this.libraryView.render()
    ]);
  }
});

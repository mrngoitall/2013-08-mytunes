var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('addToQueue', function(song){
      this.set('songQueue', this.get('songQueue').add(song));
    }, this);

    params.library.on('dequeue', function() {
      this.set('currentSong', this.get('songQueue').at(0));
      this.set('songQueue', this.get('songQueue').remove(0));
    }, this);
  }

});

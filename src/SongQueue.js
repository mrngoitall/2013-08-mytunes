var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      this.length === 1 && this.playFirst();
    }, this);
  },
  playFirst: function(){
    this.at(0).play();
  },
  enqueue: function(song){
    this.add(song);
  },
  dequeue: function(song){
  	this.remove(song);
  },
});

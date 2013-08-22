var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      this.length === 1 && this.playFirst();
    }, this);
    this.on('ended', function(){
      this.remove(this.at(0));
      this.length === 0 || this.playFirst(this.at(0));
    }, this);
    this.on('dequeue', function(song){
      this.remove(song);
    });
  },
  playFirst: function(){
    this.at(0).play();
  },
  enqueue: function(song){
    this.add(song);
  }

  // dequeue: function(){
  //   this.remove(this.at(0));
  // }

});

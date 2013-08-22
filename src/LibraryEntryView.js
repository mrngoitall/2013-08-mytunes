var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> (<%= counter %>)</td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    //debugger;
    return this.$el.html(this.template(this.model.attributes));
  }

});

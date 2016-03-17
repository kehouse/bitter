var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var BitterView = require('./bitterModel');

module.exports = Backbone.View.extend({
  el: '.bitter',
  events: function(){},
  initalize: function(){
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
    this.listenTo(this.collection, 'change', this.addAll);
  },
  addOne: function(data){
    var modelView = new BitterView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function(){
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});

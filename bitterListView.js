var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var BitterView = require('./bitterView');

module.exports = Backbone.View.extend({
  el: '.bitter',
  events: function(){},
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
    // this.listenTo(this.collection, 'change', this.addAll);
    // this.listenTo(this.collection, 'add', this.addAll);
  },
  addOne: function(el){
    var modelView = new BitterView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function(){
    this.$el.html('');
    console.log('I BEEN CALLED')
    _.each(this.collection.models, this.addOne, this);
  }
});

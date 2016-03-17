var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var bitterModel = require('./bitterModel');
var myTmpl = require('./templates');

module.exports = Backbone.View.extend({
  el: '.content',
  template: myTmpl.addTweet,
  events: {
    'click .submit': 'createBitter',
  },
  createBitter: function(event){
    event.preventDefault();
    var newBitter = {
      username: this.$el.find('textarea[name="username"]').val(),
      message: this.$el.find('input[name="message"]').val(),
    };
    var newBitterModel = new bitterModel(newBitter);
    this.$el.find('input').val('');
    newBitterModel.save();
    this.listenTo(this.collection, 'add', this.addAll);
  },
  initialize: function(){
    this.model = new bitterModel({});
    this.$el.append(this.render().el);
  },
  render: function(){
    var output = this.template;
    this.$el.html(output);
    return this;
  },

});

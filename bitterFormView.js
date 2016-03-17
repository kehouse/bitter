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
      Username: this.$el.find('input[name="Username"]').val(),
      Message: this.$el.find('input[name="Message"]').val(),
    };
    var newBitterModel = new bitterModel(newBitter);
    this.$el.find('input').val('');
    newBitterModel.save();
    console.log("COLLECTION", this.collection);
    this.collection.add(newBitterModel);
    // this.listenTo(this.collection, 'change', this.addAll);
    // this.listenTo(this.collection, 'update', this.addAll);
  },
  initialize: function(){
    this.$el.append(this.render());
  },
  render: function(){
    var output = this.template;
    this.$el.html(output);
    return this;
  },

});

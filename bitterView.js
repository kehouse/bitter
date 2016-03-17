var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');

model.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.tweet),
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function () {

    var markup = this.template(this.model.toJSON());
    console.log(markup)
    this.$el.html(markup);
    return this;
  },
  events:{
    'click .delete': 'removeBitter',
},

  removeBitter: function () {
   this.model.destroy();
 },

});

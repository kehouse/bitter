var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.tweet),
  initialize: function () {
    console.log('chhchchangne')
    this.listenTo(this.model, 'change', this.render);
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    console.log("post to page", markup)
    this.$el.html(markup);
    return this;
  },
  events:{
    'click .delete': 'removeBitter',
  },

  removeBitter: function (event) {
    event.preventDefault();
    this.model.destroy();
   }

});

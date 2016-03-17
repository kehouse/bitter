var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bitterapp2',
  idAttribute: '_id',
  initialize: function () {
    console.log('it works!');
  }
});

var Backbone = require('backbone');
var BitterModel = require('./bitterModel');

module.exports = Backbone.Collection.extend({
  model: BitterModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/bitterapp2',
  initialize: function () {
    console.log('it works!');
  }
});

var $ = require('jquery');
var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterListView');
var AddBitterView = require('./bitterFormView');

$(document).ready(function(){
  var finalBitterCol = new BitterCollection();
   new AddBitterView();
   finalBitterCol.fetch().then(function(data){
     var collection = new BitterCollection(data);
     new BitterCollectionView({collection: collection});
   })
});

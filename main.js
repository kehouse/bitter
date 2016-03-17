var $ = require('jquery');
var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterListView');
var AddBitterView = require('./bitterFormView');

$(document).ready(function(){
  var finalBitterCol = new BitterCollection();
  new AddBitterView({collection: finalBitterCol});

   finalBitterCol.fetch().then(function(data){
     console.log("AM I HAPPENING", data)
     new BitterCollectionView({collection: finalBitterCol});

   })
});

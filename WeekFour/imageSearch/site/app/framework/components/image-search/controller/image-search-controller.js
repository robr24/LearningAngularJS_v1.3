angular.module('imageSearch').controller('imageSearchController', ['$scope', '$interval', 'imagesService', function ($scope, $interval, imagesService) {

  var ctrl = this,
    interval;

  ctrl.igData = [];
  ctrl.activeImageIndex = 0;

  ctrl.incrementActiveIndex = function() {

    if (ctrl.activeImageIndex === ctrl.igData.length - 1) {
      ctrl.getPopularImages();
    }
    else {
      ctrl.activeImageIndex++;
    }
  };

  ctrl.resetActiveIndex = function() {
    ctrl.activeImageIndex = 0;
  };


  ctrl.getPopularImages = function () {
    console.log('getting popular images from instagram');
    if (interval) {
      $interval.cancel(interval);
    }
    imagesService.getPopularImages()
      .then(function (results) {
        ctrl.igData = results.data;
        ctrl.resetActiveIndex();
        interval = $interval(ctrl.incrementActiveIndex, 8000);
        console.log(ctrl.igData);
      }, function (error) {
        console.log('there was an error in getting popular images');
      });
  };

  ctrl.getImagesByTag = function(tag) {
    tag = tag || 'girl';

    imagesService.getImagesByTag(tag)
      .then(function (results) {
        ctrl.igData = results.data;
      }, function (error) {
        console.log('there was an error in getting ' + tag + ' images');
      });
  };

  ctrl.getLocIdOfLocation = function (lat, lng) {
    lat = lat || 33.843644;
    lng = lng || -84.337862;

    imagesService.getLocId(lat, lng)
      .then(function (results) {
        ctrl.locId = results.data[0].id;
        ctrl.getImagesByLocId(ctrl.locId);
        console.log(ctrl.locId);
      }, function (error) {
        console.log('there was an error in getting the locId for : ' + lat + ', ' + lng);
      });
  };

  ctrl.getImagesByLocId = function (locId) {

    locId = locId || 380215273;

    imagesService.getImagesByLocId(locId)
      .then(function (results) {
        ctrl.igData = results.data;
      }, function (error) {
        console.log('there was an error in getting this location: ' + locId);
      });
  };

//  ctrl.getPopularImages();

//  ctrl.getImagesByTag('sexy');          /// wtf??!!??!?!?
  ctrl.getImagesByTag('beautiful');

//  ctrl.getLocIdOfLocation();
}]);


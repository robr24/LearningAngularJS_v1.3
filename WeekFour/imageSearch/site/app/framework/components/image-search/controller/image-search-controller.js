angular.module('imageSearch').controller('imageSearchController', ['$scope', 'imagesService', function ($scope, imagesService) {

  var ctrl = this;

  ctrl.igData = [];

  ctrl.getPopularImages = function () {
    console.log('getting popular images from instagram');
    imagesService.getPopularImages()
      .then(function (results) {
        ctrl.igData = results.data;
      }, function (error) {
        console.log('there was an error in getting popular images');
      });
  };

  ctrl.getPopularImages();
}]);

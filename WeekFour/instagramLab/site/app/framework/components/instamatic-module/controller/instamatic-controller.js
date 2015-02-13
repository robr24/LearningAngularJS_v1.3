angular.module('instamaticModule').controller('instamaticController', ['$scope', 'instamaticService', function($scope, instamaticService) {
  var ctrl = this;

  ctrl.getPopularImages = function() {

    instamaticService.getPopularImages()
      .then(function (results) {
        ctrl.igData = results.data;
      }, function (error) {
        console.log('controller error in getting popular images');
      });
  };

  ctrl.getPopularImages();


}]);

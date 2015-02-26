angular.module('imagesModule').controller('imagesController', ['$scope', '$modal', 'imagesService', function($scope, $modal, imagesService) {
  var self = this;

  this.getImagesByTag = function(tag) {
    tag = tag || 'girl';

    imagesService.getImagesByTag(tag)
      .then(function (results) {
        self.igData = results.data;
        console.log(self.igData);
      }, function (error) {
        console.log('there was an error in getting ' + tag + ' images');
      });
  };

  this.getImagesByTag('beautiful');

  this.open = function(uri) {
    self.selectedImageUri = uri;

    var modalInstance = $modal.open({
      templateUrl: 'app/images/view/images-modal.html',
      controller: 'imagesModalController',
      size: 'lg',
      resolve: {
        imageUri: function () {
          console.log(uri);
          return uri;
        }
      }
    });


  };

}]);

angular.module('imagesModule').controller('imagesModalController', ['$scope', '$modalInstance', 'imageUri',  function($scope, $modalInstance, imageUri) {
  console.log(imageUri);
  $scope.imageUri = imageUri;
}]);

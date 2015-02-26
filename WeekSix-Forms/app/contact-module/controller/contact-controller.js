angular.module('contactModule').controller('contactController', ['$scope', function($scope) {

  this.submitForm = function(isValid) {
    if (isValid) {
      alert('sweet everything is valid');
    }
  };

}]);

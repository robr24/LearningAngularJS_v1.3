angular.module('imagesModule').service('imagesService', ['$http', '$q', 'clientId', function($http, $q, clientId) {

  this.getImagesByTag = function(tag) {
    var deferred = $q.defer();
    var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=' + clientId +  '&callback=JSON_CALLBACK';

    $http.jsonp(url)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

}]);

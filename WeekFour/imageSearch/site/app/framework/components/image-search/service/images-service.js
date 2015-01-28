angular.module('imageSearch').service('imagesService', ['$http', '$q', 'clientId', function($http, $q, clientId) {


  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getPopularImages = function() {
    var deferred = $q.defer();
    var url = '/instagram/v1/media/popular?client_id=' + clientId;

    $http.get(url)
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

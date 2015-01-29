angular.module('imageSearch').service('imagesService', ['$http', '$q', 'clientId', function($http, $q, clientId) {


  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getPopularImages = function() {
    var deferred = $q.defer();
    var url = 'https://api.instagram.com/v1/media/popular?client_id=' + clientId +  '&callback=JSON_CALLBACK';
//    var url = "app/framework/components/image-search/model/ig-popular.json";

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

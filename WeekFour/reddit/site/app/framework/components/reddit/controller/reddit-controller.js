angular.module('redditModule').controller('redditController', ['$scope', 'redditService', 'RedditFactory', function($scope, redditService, RedditFactory) {
  var ctrl = this;

  ctrl.reddit = new RedditFactory();

}]);

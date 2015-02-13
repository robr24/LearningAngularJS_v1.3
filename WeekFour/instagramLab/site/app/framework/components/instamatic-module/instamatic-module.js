angular.module('instamaticModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('instamaticModule').config(function($stateProvider) {
  $stateProvider.state('instamatic', {
    url: '/instamatic',
    templateUrl: 'app/framework/components/instamatic-module/view/instamatic-view.html',
    controller: 'instamaticController',
    controllerAs: 'instamaticCtrl'
  });
  /* Add New States Above */

});

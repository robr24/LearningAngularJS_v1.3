angular.module('imagesModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('imagesModule').config(function($stateProvider) {
  $stateProvider.state('imageSearch', {
    url: '/images',
    templateUrl: 'app/images/view/images-view.html',
    controller: 'imagesController',
    controllerAs: 'imagesCtrl'
  });
  /* Add New States Above */

});

angular.module('contactModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('contactModule').config(function($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'app/contact-module/view/contact-view.html',
    controller: 'contactController',
    controllerAs: 'contactCtrl'
  });
  /* Add New States Above */

});

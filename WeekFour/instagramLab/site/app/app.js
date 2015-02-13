angular.module('instagramApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'instamaticModule']);

angular.module('instagramApp').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/instamatic');
});

angular.module('instagramApp').value('clientId', '2122e774bdd44005ba53fb84478e67d6');

angular.module('instagramApp').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});

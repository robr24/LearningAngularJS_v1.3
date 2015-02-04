angular.module('redditLab', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'redditModule']);

angular.module('redditLab').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/reddit');

});

angular.module('redditLab').run(function ($rootScope) {

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

angular.module('reddit', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'redditModule']);

angular.module('reddit').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/reddit');

});

angular.module('reddit').run(function ($rootScope) {

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

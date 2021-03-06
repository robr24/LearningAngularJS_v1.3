angular.module('exampleApp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'todoModule']);

angular.module('exampleApp').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/todo');

});

angular.module('exampleApp').run(function ($rootScope) {

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

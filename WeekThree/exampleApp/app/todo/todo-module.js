angular.module('todoModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('todoModule').config(function($stateProvider) {
  $stateProvider.state('todo', {
    url: '/todo',
    templateUrl: 'app/todo/view/todo-view.html',
    controller: 'todoController',
    controllerAs: 'todoCtrl'
  })
    .state('todo-repeat', {
      url: '/todo-repeat',
      templateUrl: 'app/todo/view/todo-repeat-view.html',
      controller: 'todoController',
      controllerAs: 'todoCtrl'
    })
    .state('todo-switch', {
      url: '/todo-switch',
      templateUrl: 'app/todo/view/todo-repeat-switch-view.html',
      controller: 'todoController',
      controllerAs: 'todoCtrl'
    });
  /* Add New States Above */

});

angular.module('imageSearch', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('imageSearch').config(function($stateProvider) {
  $stateProvider.state('images', {
    url: '/images',
    templateUrl: 'app/framework/components/image-search/view/images-slideshow.html',
    controller: 'imageSearchController',
    controllerAs: 'imageSearchCtrl'
  });
  /* Add New States Above */

  /* TODO:
      ### prerequisites:
        a. have instagram account
        b. get instagram api client tokens: http://instagram.com/developer/
     1. Create module.
     2. Add in state provider.
     3. Add default/otherwise routing in app.js
     4. Create controller.
     5. Create html view.
     6. Create service for api.
     7. add client token as module value
     8. Add get method in controller.

     **** Note: this should be working fine now, EXCEPT for cross domain issues. Now we need to go into Grunt
     Url:    https://github.com/drewzboto/grunt-connect-proxy
     1. npm install grunt-connect-proxy --save-dev
        npm install http-rewrite-middleware --save-dev
     2. create new directory, grunt-tasks
     3. add in connect.js
     4. load grunt tasks folder in gruntfile.js
     5. add configureProxies as a grunt serve task!!!



  */

});

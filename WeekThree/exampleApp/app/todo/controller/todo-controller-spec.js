describe('todoController', function() {

  beforeEach(module('todoModule'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('todoController', {$scope: scope});
  }));

  it('should ...', inject(function() {

    expect(1).toEqual(1);

  }));

});

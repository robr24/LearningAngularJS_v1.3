angular.module('redditModule').factory('RedditFactory', ['redditService', function(redditService) {

  // constructor function
  var Reddit = function() {
    this.items = [];
    this.busy = false;
    this.after = '';

    this.nextPage = function() {
      var self = this;
      if (this.busy) {
        return;
      }
      this.busy = true;

      redditService.nextPage(this.after)
        .then(function(data) {
          var items = data.data.children;
          angular.forEach(items, function(item) {
            self.items.push(item.data);
          });
          self.after = 't3_' + self.items[self.items.length - 1].id;
          self.busy = false;
        });
    };
  };

  return Reddit;


}]);

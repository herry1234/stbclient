'use strict';

angular.module('myApp.cmd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cmdlist', {
    templateUrl: 'cmdview/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);
'use strict';

angular.module('myApp.stb', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stblist', {
    templateUrl: 'stbview/view1.html',
    controller: 'View1Ctrl'
  }).when('/stbdetail/:id', {
    templateUrl: 'stbview/stbdetail.html',
    controller: 'StbDetailCtrl'
  });
}])

.controller('View1Ctrl', ['$scope','Stb',function($scope,Stb) {
  console.log("DEBUG");
  $scope.stbs = Stb.query();

}])
.controller('StbDetailCtrl', ['$scope','$routeParams','Stb',function($scope,$routeParams,Stb) {
  console.log($routeParams);
  console.log("DEBUG" + $routeParams.id);
//  Stb.get({stbid:$routeParams.id},function(data) {
//    $scope.stb = data;
//  });
  $scope.stb = Stb.get({stbid:$routeParams.id});

}]);
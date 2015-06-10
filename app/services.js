var stbServices = angular.module('myApp.stbServices', ['ngResource']);

stbServices.factory('Stb', ['$resource',
  function($resource){
    return $resource('http://127.0.0.1:3000/stbs/:stbid', {}, {
      query: {method:'GET', params:{stbid:''}, isArray:true}
    });
  }]);
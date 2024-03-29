(function() { //wrap in closure function

  var myApp = angular.module('myApp', [
    'ngRoute',
    'weatherController'
  ]);

  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
      templateUrl: 'partials/list.html',
      controller: 'ListController'
    }).
    when('/details/:itemId', {
      templateUrl: 'partials/details.html',
      controller: 'DetailsController'
    }).

    otherwise({
      redirectTo: '/list'
    });
  }]);

})(); //closure
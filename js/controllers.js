var weatherController = angular.module('weatherController', ['ngAnimate']);

weatherController.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://api.openweathermap.org/data/2.5/box/city?bbox=-6,51,-10,55,10&cluster=yes').success(function(data) {
    $scope.locations = data.list;
    $scope.locationOrder = 'name';

  });
}]);

weatherController.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('http://api.openweathermap.org/data/2.5/box/city?bbox=-6,51,-10,55,10&cluster=yes').success(function(data) {

    $scope.locations = data.list;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.locations.length-1;
    }

    if ($routeParams.itemId < $scope.locations.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);


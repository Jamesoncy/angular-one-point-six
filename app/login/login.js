'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.username = null;
  $scope.password = null;

  $scope.login = function() {
    var username = $scope.username;
    var password = $scope.password;
    alert(username + " " + password);
  }

}]);
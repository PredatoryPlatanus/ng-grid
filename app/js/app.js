'use strict';


// Declare app level module which depends on filters, and services
angular.module('adminApp', [
  'ngRoute',
  'adminApp.filters',
  'adminApp.services',
  'adminApp.directives',
  'adminApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/settingsGrid.html', controller: 'gridController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

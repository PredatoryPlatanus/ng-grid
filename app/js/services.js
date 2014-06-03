'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('adminApp.services', ['ngResource']).
	factory('Setting',['$resource',
  		function ($resource) {
  			return $resource('json/settings.json');
  			}]);
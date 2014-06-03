'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('adminApp.services', ['ngResource']).
	factory('Setting',['$resource',
  		function ($resource) {
  			return $resource('json/settings.json',{},
  		     {saveList: {method: "PUT", isArray: true}});
  			}]).
	factory('gridTemplateSelector', function(dataType){
		
	}).
	factory('settingsValidator', function(){
		var validator = {};

		validator.isValid = function(settings){
			return true;
		}

		return validator;
	});
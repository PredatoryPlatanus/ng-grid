'use strict';

/* Directives */


angular.module('adminApp.directives', ['ngGrid']).
  directive('dataGrid', function(version) {
    return {
    	restrict: "E",
    	scope: {
    		gridOptions: "=options"
    	}
    };
  });

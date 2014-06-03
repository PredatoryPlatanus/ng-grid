'use strict';

/* Directives */

angular.module('adminApp.directives', ['ngGrid']).
  directive('grid', function() {
  	var grid = {};
  	grid.replace = 'true';
  	grid.restrict = "E";
  	grid.scope = {
  		gridOptions:"=",
  		getDataCommand: "=",
  		saveChangesCommand: "="
  	};

  	grid.controller = function($scope){
  		$scope.gridOptions.data = "data";

  		$scope.saveChanges = function(){
        	$scope.saveChangesCommand($scope.data);
        	$scope.reloadData();
      	};    

      	$scope.reloadData = function(){
      		$scope.data = $scope.getDataCommand();
      	};

      	$scope.reloadData();
    };

    grid.templateUrl = 'partials/grid.html';

  	return grid;
  });

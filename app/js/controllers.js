'use strict';

/* Controllers */

angular.module('adminApp.controllers', ['ngGrid'])
  .controller('gridController', ['$scope','Setting', function($scope, Setting) {
  	$scope.settingsData = Setting.query();

    $scope.gridOptions = { 
    	data: 'settingsData', 
    	enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs: 
        [{field: 'settingKey', displayName: 'Setting', enableCellEdit: false}, 
         {field:'value', displayName:'', enableCellEdit: true, sortable: false}]};

  }]);

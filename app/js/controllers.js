'use strict';

/* Controllers */

angular.module('adminApp.controllers', ['ngGrid'])
  .controller('settingsController', ['$scope', 'Setting', function($scope, Setting) {
    $scope.gridOptions = { 
        enableCellSelection: false,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs: 
        [
         {field: 'settingKey', displayName: 'Setting Key', enableCellEdit: false, width: "20%"}, 
         {field:'value', displayName:'', enableCellEdit: true, sortable: false, width:"*"}
        ]};
    $scope.getDataCommand = Setting.query;
    $scope.saveChangesCommand = Setting.saveList;
  }]);
1
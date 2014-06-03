'use strict';

/* Controllers */

angular.module('adminApp.controllers', ['ngGrid'])
  .controller('gridController', ['$scope', 'settingsValidator',
                                 'Setting', function($scope, settingsValidator, Setting) {
    $scope.gridOptions = { 
    	data: 'settingsData', 
    	enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs: 
        [{field: 'settingKey', displayName: 'Setting Key', enableCellEdit: false, width: "20%"}, 
         {field:'value', displayName:'', enableCellEdit: true, sortable: false, width:"*"}]};

    $scope.saveChanges = function(){
      if(settingsValidator.isValid($scope.settingsData)){
        Setting.saveList($scope.settingsData);

        $scope.reloadSettings();
      }    
    };
    
    $scope.reloadSettings = function(){
      $scope.settingsData = Setting.query();
    }

    $scope.reloadSettings();

  }]);

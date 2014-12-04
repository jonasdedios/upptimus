'use strict';

/**
 * @ngdoc function
 * @name prueba1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prueba1App
 */
angular.module('prueba1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

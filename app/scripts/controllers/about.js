'use strict';

/**
 * @ngdoc function
 * @name prueba1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prueba1App
 */
angular.module('prueba1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

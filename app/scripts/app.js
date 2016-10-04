'use strict';

/**
 * @ngdoc overview
 * @name imperialChineseApp
 * @description
 * # imperialChineseApp
 *
 * Main module of the application.
 */
angular
  .module('imperialChineseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/hours', {
        templateUrl: 'views/hours.html',
        controller: 'HoursCtrl',
        controllerAs: 'hours'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .controller('AppCtrl', function ($scope, $location) {
      $scope.isActive = function (route) {
        return route === $location.path();
      };
    })
    .constant('hours', {
      'Monday': '11AM-9PM',
      'Tuesday': '11AM-9PM', 
      'Wednesday': '11AM-9PM', 
      'Thursday': '11AM-9PM', 
      'Friday': '11AM-10PM', 
      'Saturday': '11AM-10PM', 
      'Sunday': '11AM-9PM'
    });

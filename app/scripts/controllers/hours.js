'use strict';

/**
 * @ngdoc function
 * @name imperialChineseApp.controller:HoursCtrl
 * @description
 * # HoursCtrl
 * Controller of the imperialChineseApp
 */
angular.module('imperialChineseApp')
  .controller('HoursCtrl', function ($scope, moment, hours) {
    var now = moment();

    $scope.openHours = hours;

    $scope.today = now.format('dddd');

    $scope.message = function () {
      var hourStr = hours[$scope.today].split('-');
      var open = moment(hourStr[0], 'hhA');
      var close = moment(hourStr[1], 'hhA');
      var isBetween = now.isBetween(open, close);
      var diff = close.diff(now, 'minutes');
      var xmas = moment({
        month: '11',
        day: '25'  
      });
      var thx = function () {
        var last = moment({
          month: '10',
          day: '30'
        });
        while(last.format('dddd') !== 'Thursday') {
          last = last.subtract(1, 'day');
        }
        return last;
      };

      var isXmas = now.format('LL') === xmas.format('LL');
      var isThx = now.format('LL') === thx().format('LL');

      if (isXmas) {
        return {
          msg: 'Closed for Christmas!',
          cls: 'danger'
        };
      } else if (isThx) {
        return {
          msg: 'Closed for Thanksgiving!',
          cls: 'danger'
        };
      }

      if (isBetween) {
        if (diff < 60) {
          return { 
            msg: 'Closing Soon!',
            cls: 'warning'
          };
        }
        return { 
          msg: 'Open!',
          cls: 'success'
        };
      } else {
        return {
          msg: 'Closed',
          cls: 'danger'
        };
      }
    };

    $scope.messageClass = 'success';
  });

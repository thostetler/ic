'use strict';

/**
 * @ngdoc function
 * @name imperialChineseApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the imperialChineseApp
 */
angular.module('imperialChineseApp')
  .controller('MenuCtrl', function () {

    var options = {};
    options.PrimaryBackgroundColor = '#d9d9d9';
    options.MenuDescBackgroundColor = '#d9d9d9';
    options.SectionTitleBackgroundColor = '#f1f1f1';
    options.SectionDescBackgroundColor = '#f1f1f1';
    options.ItemBackgroundColor = '#ffffff';
    options.PrimaryFontFamily = 'Roboto';
    options.BaseFontSize = '15px';
    options.FontCasing = 'Default';
    options.PrimaryFontColor = '#000000';
    options.MenuDescFontColor = '#000000';
    options.SectionTitleFontColor = '#555555';
    options.SectionDescFontColor = '#555555';
    options.ItemTitleFontColor = '#555555';
    options.FeedbackFontColor = '#555555';
    options.ItemDescFontColor = '#555555';
    options.ItemPriceFontColor = '#555555';
    options.HideDisplayOptionPhotos = 'true';
    options.HideDisplayOptionDisclaimer = 'true';
    options.MenuTemplate = '1';
    options.MenuIframe = 'false';
    new window.BusinessView('imperial-chinese-restaurant-11', 'menusContainer', options);
  });

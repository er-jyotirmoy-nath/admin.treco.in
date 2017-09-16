'use strict';

/**
 * @ngdoc overview
 * @name admintrecoinApp
 * @description
 * # admintrecoinApp
 *
 * Main module of the application.
 */
angular
  .module('admintrecoinApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch','ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.
    state('index',{
      url:"/",
      templateUrl:"views/main.html",
      controller:"MainCtrl"
    }).
    state('news',{
      url:'/news',
      templateUrl:"views/news.html",
      controller:"NewsCtrl"
    }).
    state('blogs',{
      url:'/blogs',
      templateUrl:"views/blogs.html",
      controller:"BlogsCtrl"
    }).
    state('clients',{
      url:"/clients",
      templateUrl:"views/clients.html",
      controller:"ClientsCtrl"
    })
  });

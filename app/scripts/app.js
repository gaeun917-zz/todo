'use strict';

/**
 * @ngdoc overview
 * @name myToDoApp
 * @description
 * # myToDoApp
 *
 * Main module of the application.
 */

// $ sudo npm install yo && bower && grunt
// $ npm install yeoman-generator
// $ npm install generator-install
// $ yo angular:controller todo : todo.js controller만듦
// $ bower install && npm install
// $ grunt serve localhost:9000
// app folder asset 변경되면 grunt의 watch task에 의해 자동 renew
// npm update: $ sudo npm install -g npm




// $ grunt test: 단위테스트 해서 오류 여부를 console에 찍어줌
// php, jsp : 서버 템플릿, angular: client template

// yo: controllers & test folder &  생성


// drag & drop 할 수 있는
// angular-ui-sortable 을 설치한다
// $ bower install angular-ui-sortable --save
// index.html에 자동으로 <script> 되어 있음
// bower.json 파일에도 추가되어있음


// 모듈 사이의 의존선을 설정해야 사용할 수 있음 -> 아래의 module에 angular-ui-sortable 추가
// todo.html파일에서 <div 안에서  ui-sortable 설정함



angular
  .module('myToDoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

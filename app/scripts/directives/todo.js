'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:todo
 * @description
 * # todo
 */
// directive 만들기
//yo angular:directive todo



// directive로 html tag로만 뷰를 확장하고 , 그안에서 상태와 액션을 담아 컴토넌트화
// 사용자 정의 태그 directive - view
// ng-model이 지시자이다
// html 의 attribtue 의 p-name으로 설정 가능
// @ 부모 -> 자식
// = 부모 <-> 자식
// & 부모 <- 자식





angular.module('myToDoApp')
  .directive('todo', function () { // (directive Name, function(injectable){return})
    return {
            restrict: 'E', // 혼합하여 사용가능 - E;element tag로 사용 , A ;attribute  C:class, M:comment
            replace: true,
      //scope: true ; 상속가능
      // controller: $scope.name = 'peter'
      // @ 부모 -> 자식
      // 1. scope: { name: '@pname' }
      // html: <div> {{name}} </div> or <div todo p-name="{{name}}"></div> 사용 가능
      // = 부모 <-> 자식: 양방향
      // 2. scope: { name: '=pname' }
      // html: <div todo p-name="name"></div>



      //test
      // karma error 뜬다 -> npm install karma-ng-html2js-preprocessor --save
      // karma.conf.js 환경설정 & test directive에 template 모듈 추가
         templateUrl: 'scripts/directives/todo-list.html',
      // template지정 or html: <span ng-bind: 'todo-list'> 할수 있음. to-list.html있어야함
      // controller: todoController 지정가능

      // 프로트렉터 설치하자
      // npm install protractor --save--dev
      // test folder에 트렉터 conf파일 생긴다


      link: function postLink(scope, element, attrs) {}
          };
  });

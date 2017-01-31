'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the myToDoApp
 */

// 의존성 주입
// html template
// plain old javascript object model
// $scope 객체로 데이터 참조
// MVW model view whatever
// module(app.js) : routing 설정값
// service: backend 에서 데이터 받아오거나 controller에서 데이터 받아 처리
// controller(todojs) : view(html ng-) - view model($scope)
// view : 사용자 정의 태그 (directive(view 확장) - html)


// two way data binding
// event listener 없이 $scope으로 view- controller data handling update
// ng-app은 최상단으로 $rootscope이고, 1개만 존재. $0
// $scope으로 inheritance 관계 성립 childScope $1
// $scope.$apply(function(){}) 사용할때 : 1. 사용자 정의 이벤트 콜백, 2. 3rd 파티 라이브러리 콜백 3. 비동기 콜백

//$scope life cycle : angular가 자동으로 생성, 삭제
//1. rootscope 생성 2. dom 해석하여 $watch 등록 3. $apply model 변경 감지 4. $destroy()로 삭제
//$broadcast, $emit, $on
// di:interface- 확장에는 열려있고, 수정에는 닫혀있고 추상화에 의존, 클래스는 하나의 책임만 수행
// $scope객체를 주입받아서 사용한다 ( module에 myToDoApp은 index에 있고, view 가 extend한다







angular.module('myToDoApp')
  .controller('TodoCtrl',
    function ($scope, todoService) { // service를 parameter로 주입

        $scope.todos = todoService.getTodo();

        //1. html의 ng-submit=addTodo()
        $scope.addTodo = function () { // ng-
          todoService.addTodo($scope.todo);
          $scope.todo = '';
        };

        //2. html의 ng-clicked=removeTodo()
        $scope.removeTodo = function (index) {
          todoService.removeTodo(index);
        };




    // $scope.todos = [
    //   'item1',
    //   'item2',
    //   'item3'
    // ];
    //




  });

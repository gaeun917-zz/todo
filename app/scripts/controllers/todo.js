'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the myToDoApp
 */


angular.module('myToDoApp')
  .controller('TodoCtrl', function ($scope) {

    $scope.todos = todoService.getTodo();

    //1. html의 ng-submit=addTodo()
    $scope.addTodo = function () { // ng-
      todoService.addTodo($scope.todo);
      $scope.todo = '';
    };

    //2. html의 ng-submit=removeTodo()
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

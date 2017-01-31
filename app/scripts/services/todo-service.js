'use strict';

/**
 * @ngdoc service
 * @name myToDoApp.todoService
 * @description
 * # todoService
 * Service in the myToDoApp.
 */
// service 생성
//yo angular:service todo-service
// controller에서 서비스를 주입받아 처리하도록 수정

angular.module('myToDoApp')
  .service('todoService', function todoService() {
    var todos = [];

    this.getTodo = function() {
      return todos;
    };
    this.addTodo = function (todo) {
      todos.push(todo);
    };
    this.removeTodo = function (index) {
      todos.splice(index, 1);
    };

  });

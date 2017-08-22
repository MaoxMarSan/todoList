'use strict';

angular.module('myApp.todo-list', ['ngRoute', 'ngLocalStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo-list', {
    templateUrl: 'todo-list/todo-list.html',
    controller: 'TodoCtrl'
  });
}])

.controller('TodoCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {

$scope.todoList = [];
$scope.add = function(){	
	if($scope.addList === ''){
		hideRemove = true;		
	}else{
		$scope.todoList.push({text:$scope.addList, check:false});
		$scope.addList = '';
	}
}

$scope.edit = function(index){
	$scope.selected=index;
	$scope.editInput=$scope.todoList[index].text;
}

$scope.ok = function(){
	$scope.todoList[$scope.selected].text=$scope.editInput;
}

$scope.remove = function($index){
	$scope.todoList.splice($index, 1)
}

$scope.saveLocal = function(){
	$localStorage.put('list', JSON.stringify($scope.todoList));
}

$scope.todoList= JSON.parse($localStorage.get('list'));

}]);


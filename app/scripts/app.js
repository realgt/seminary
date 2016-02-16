'use strict';

var seminaryApp = angular.module("seminaryApp", [
    "ngRoute",
    "angular.filter",
    "firebase",
    "seminaryControllers",
    "seminaryServices"
]);

seminaryApp.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
		when('/lessons', {
			templateUrl: 'views/lesson-list.html',
			controller: 'LessonListController'
		}).
		when('/lessons/create', {
            templateUrl: 'views/lesson-detail.html',
            controller: 'LessonDetailController'
        }).
		when('/lessons/:lessonId', {
			templateUrl: 'views/lesson-detail.html',
			controller: 'LessonDetailController'
		}).
		when('/index', {
			templateUrl: 'views/seminary-index.html',
			controller: 'SeminaryIndexController'
		}).
		otherwise({
	        redirectTo: '/index'
	      });
}]);

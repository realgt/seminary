'use strict';

var seminaryApp = angular.module("seminaryApp", [
    "ngRoute",
    "angular.filter",
    "firebase",
    "seminaryControllers",
    "seminaryServices"
]);

seminaryApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });
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
		when('/teams', {
            templateUrl: 'views/team-list.html',
            controller: 'TeamListController'
        }).
        when('/teams/:teamId', {
            templateUrl: 'views/team-detail.html',
            controller: 'TeamDetailController'
        }).
        when('/scripturemastery', {
            templateUrl: 'views/scripturemastery.html',
            controller: 'ScriptureMasteryController'
        }).
        when('/help', {
            templateUrl: 'views/help.html'
        }).
		when('/index', {
			templateUrl: 'views/seminary-index.html',
			controller: 'SeminaryIndexController'
		}).
		otherwise({
	        redirectTo: '/index'
	      });
}]);

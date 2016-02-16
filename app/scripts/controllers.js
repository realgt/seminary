'use strict';

var seminaryControllers = angular.module('seminaryControllers', []);

seminaryControllers.controller("SeminaryIndexController", ['$scope', 
  function($scope) {

   $scope.login = function() {
       var ref = new Firebase("https://seminary.firebaseio.com");
       ref.authWithOAuthPopup("google", function(error, authData) {
         if (error) {
           console.log("Login Failed!", error);
         } else {
           console.log("Authenticated successfully with payload:", authData);
         }
       });
   };


}]);


seminaryControllers.controller("LessonListController", ['$scope', 'seminaryDataService',
  function($scope, seminaryDataService) {
	$scope.lessons = [];
	seminaryDataService.getData().then(function(data){
	    $scope.lessons = data;
	});
}]);

seminaryControllers.controller("LessonDetailController", ['$scope', '$routeParams', 'seminaryDataService',
  function($scope, $routeParams, seminaryDataService) {
	var lessonId = $routeParams.lessonId;
	$scope.thisLesson = {};
	$scope.lessons = [];

	seminaryDataService.getData().then(function(data){
	    $scope.lessons = data;
		//identify this lesson based on lessonId
		$scope.thisLesson = lessonId ? seminaryDataService.findById(lessonId) : {};
	});

}]);

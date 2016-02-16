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
	seminaryDataService.getData().then(function(data){
	    $scope.lessons = data;
	});
}]);

seminaryControllers.controller("LessonDetailController", ['$scope', '$routeParams', 'Lesson',
  function($scope, $routeParams, Lesson) {
	var lessonId = $routeParams.lessonId;
	new Lesson(lessonId).$bindTo($scope, "lesson");
}]);

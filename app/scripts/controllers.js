'use strict';

var seminaryControllers = angular.module('seminaryControllers', []);

seminaryControllers.controller("SeminaryIndexController", ['$scope', 'seminaryDataService',
  function($scope, seminaryDataService) {

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

   seminaryDataService.getData(0).then(function(data){
       $scope.lessons = data;
   });

}]);
seminaryControllers.controller("TeamListController", ['$scope', 'seminaryDataService',
    function($scope, seminaryDataService) {
      seminaryDataService.getTeams().then(function(data){
          $scope.teams = data;
    });
}]);
seminaryControllers.controller("TeamDetailController", ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    var teamId = $routeParams.teamId;
    new Team(teamId).$bindTo($scope,'team');
}]);

seminaryControllers.controller("LessonListController", ['$scope', 'seminaryDataService',
  function($scope, seminaryDataService) {
	seminaryDataService.getData(5).then(function(data){
	    $scope.lessons = data;
	});
}]);

seminaryControllers.controller("LessonDetailController", ['$scope', '$routeParams', 'Lesson', 'seminaryDataService',
  function($scope, $routeParams, Lesson, seminaryDataService) {
	var lessonId = $routeParams.lessonId;
	new Lesson(lessonId).$bindTo($scope, "lesson");
	
	seminaryDataService.getTeams().then(function(data){
        $scope.teams = data;
    });
}]);

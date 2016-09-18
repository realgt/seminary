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

   seminaryDataService.getData(0.3).then(function(data){
       $scope.lessons = data;
   });
   
   $scope.weekday = new Array(7);
   $scope.weekday[0]=  "Sun";
   $scope.weekday[1] = "Mon";
   $scope.weekday[2] = "Tue";
   $scope.weekday[3] = "Wed";
   $scope.weekday[4] = "Thu";
   $scope.weekday[5] = "Fri";
   $scope.weekday[6] = "Sat";

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
	
	$scope.weekday = new Array(7);
    $scope.weekday[0]=  "Sun";
    $scope.weekday[1] = "Mon";
    $scope.weekday[2] = "Tue";
    $scope.weekday[3] = "Wed";
    $scope.weekday[4] = "Thu";
    $scope.weekday[5] = "Fri";
    $scope.weekday[6] = "Sat";
}]);

seminaryControllers.controller("LessonDetailController", ['$scope', '$routeParams', 'Lesson', 'seminaryDataService',
  function($scope, $routeParams, Lesson, seminaryDataService) {
	var lessonId = $routeParams.lessonId;
	new Lesson(lessonId).$bindTo($scope, "lesson");
	
	seminaryDataService.getTeams().then(function(data){
        $scope.teams = data;
    });
}]);

seminaryControllers.controller("ScriptureMasteryController", ['$scope', 'seminaryDataService',
  function($scope, seminaryDataService) {
    seminaryDataService.getScriptureMastery().then(function(data){
        $scope.scriptureMastery = data;
        //set star levels
        setTimeout(function() {
            
            $('span.Roger').text($(".Roger .gold").length);
            $('span.Romina').text($(".Romina .gold").length);
            $('span.Jehu').text($(".Jehu .gold").length);
            $('span.Marley').text($(".Marley .gold").length);
            $('span.Jorge').text($(".Jorge .gold").length);
            $('span.Lynzee').text($(".Lynzee .gold").length);
            $('span.Ian').text($(".Ian .gold").length);
            $('span.Karla').text($(".Karla .gold").length);
            $('span.Erik').text($(".Erik .gold").length);
            $('span.Christian').text($(".Christian .gold").length);
        },1000);
        
    });
    
    $scope.setStarLevel = function(scripture, student, starLevel) {
        seminaryDataService.setScriptureMastery(scripture, student, starLevel);
    };
    
}]);

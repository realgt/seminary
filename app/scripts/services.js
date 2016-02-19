'use strict';

var seminaryServices= angular.module('seminaryServices', []);

seminaryServices.factory("seminaryDataService", ['$firebaseArray', '$q',
  function($firebaseArray, $q) {	
	return{
	    getData: function(daysOffset){
	        var offsetDays = daysOffset || 0;
	        var offset = 86400000 * offsetDays;
	        var ref = new Firebase("https://seminary.firebaseio.com/courses/ottm/term/2/Days");
	        
	        var lessons = [] ;
	    	// Creating a deferred object
	        var deferred = $q.defer();
			if (lessons.length === 0) {

				var lessonsData = $firebaseArray(ref.orderByChild("Date").startAt(new Date().getTime() - offset));
				lessonsData.$loaded().then(function(data) {
				    lessons = data;
				    deferred.resolve(data);
				})
				.catch(function(error) {
					console.log("Error:", error);
				});
			} else {
				deferred.resolve(lessons);
			}
			return deferred.promise;
	    },
	    getTeams: function(){
	        var ref = new Firebase("https://seminary.firebaseio.com/teams/");
	        var teams = [];
            // Creating a deferred object
            var deferred = $q.defer();
            if (teams.length === 0) {

                var teamsData = $firebaseArray(ref);
                teamsData.$loaded().then(function(data) {
                    teams = data;
                    deferred.resolve(data);
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
            } else {
                deferred.resolve(teams);
            }
            return deferred.promise;
        }
    };
}]);

seminaryServices.factory("Team", ["$firebaseObject",
  function($firebaseObject) {
      return function(teamId) {
          var ref = new Firebase("https://seminary.firebaseio.com/teams");//TODO add support for all four manuals
          var teamRef = ref.child(teamId);
          
          return $firebaseObject(teamRef);
      };    
}]);

seminaryServices.factory("Lesson", ["$firebaseObject",
  function($firebaseObject) {
    return function(lessonId) {
        var ref = new Firebase("https://seminary.firebaseio.com/courses/ottm/term/2/Days");//TODO add support for all four manuals
        var lessonRef = ref.child(lessonId);
        
        return $firebaseObject(lessonRef);
    };    
}]);
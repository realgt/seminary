'use strict';

var seminaryServices= angular.module('seminaryServices', []);

seminaryServices.factory("seminaryDataService", ['$firebaseArray', '$q',
  function($firebaseArray, $q) {
	var ref = new Firebase("https://seminary.firebaseio.com/lessons/ottm/");
	var lessons = [] ;
	return{
	    getData: function(){
	    	// Creating a deferred object
	        var deferred = $q.defer();
			if (lessons.length === 0) {

				var lessonsData = $firebaseArray(ref);
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
	    }
    };
}]);

seminaryServices.factory("Lesson", ["$firebaseObject",
  function($firebaseObject) {
    return function(lessonId) {
        var ref = new Firebase("https://seminary.firebaseio.com/lessons/ottm");//TODO add support for all four manuals
        var lessonRef = ref.child(lessonId);
        
        return $firebaseObject(lessonRef);
    };    
}]);
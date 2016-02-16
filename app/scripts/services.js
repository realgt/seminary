'use strict';

var seminaryServices= angular.module('seminaryServices', []);

seminaryServices.factory("seminaryDataService", ['$firebaseArray', '$q', '$window',
  function($firebaseArray, $q, $window) {
	var ref = new Firebase("https://seminary.firebaseio.com/lessons");
	var lessons = JSON.parse($window.localStorage.getItem("seminarylessons")) ||  [] ;
	return{
	    getData: function(){
	    	// Creating a deferred object
	        var deferred = $q.defer();
			if (lessons.length === 0) {

				var lessonsData = $firebaseArray(ref);
				lessonsData.$loaded().then(function(data) {

					
					// store locally to avoid database hit
				    $window.localStorage.setItem("seminarylessons", JSON.stringify(lessons));
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
	    findById: function(id) {
	    	if (lessons.length > 0) {
	    		return lessons.reduce(function(a, b){return (a.$id===id && a) || (b.$id === id && b);});
	    	}
	    }
    };
}]);

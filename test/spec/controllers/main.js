'use strict';

describe('Controller: SeminaryIndexController', function() {
	var scope;
	// load the controller's module
	beforeEach(angular.mock.module('seminaryApp'));
	//mock the controller and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
    	//create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('SeminaryIndexController', {$scope: scope});
    }));
    
    it('should pass', function() {
        expect(true).toEqual(true);
    });

	
});


describe('Controller: LessonDetailController', function() {
	var scope;
	// load the controller's module
	beforeEach(angular.mock.module('seminaryApp'));
	//mock the controller and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
    	//create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('LessonDetailController', {$scope: scope});
    }));

	it('should pass', function() {
		expect(true).toEqual(true);
	});
});

describe('Controller: LessonListController', function() {
	var scope;
	// load the controller's module
	beforeEach(angular.mock.module('seminaryApp'));
	//mock the controller and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
    	//create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('LessonListController', {$scope: scope});
    }));

    it('should pass', function() {
        expect(true).toEqual(true);
    });

});
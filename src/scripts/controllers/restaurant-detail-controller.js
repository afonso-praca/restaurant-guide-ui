angular.module("controllers")
	.controller("RestaurantDetailController", function($scope, restaurant, SharedData){

		var self = this;
		$scope.SharedData = SharedData;

		// LIST ORDER AND SEARCH STUFF
		$scope.restaurant = restaurant;

		self.startModule = function(){

		};

		self.startModule();
	});
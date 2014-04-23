angular.module("controllers")
	.controller("RestaurantDetailController", function($scope, restaurant, SharedData){

		var self = this;
		$scope.SharedData = SharedData;

		self.startModule = function(){
			$scope.restaurant = restaurant.data.restaurant;
			$scope.similars = restaurant.data.similars;
		};

		self.startModule();
	});
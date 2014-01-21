angular.module("controllers")
	.controller("RestaurantDetailController", function($scope, restaurant, SharedData, $timeout){

		var self = this;
		$scope.SharedData = SharedData;

		// LIST ORDER AND SEARCH STUFF
		$scope.restaurant = restaurant;

		self.startModule = function(){
			console.log($scope.restaurant);
			$timeout(function(){
				$scope.SharedData.isLoading = false;
			}, 1800);
		};

		self.startModule();
	});
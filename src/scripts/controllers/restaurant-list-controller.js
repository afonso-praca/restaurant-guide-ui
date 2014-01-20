angular.module("controllers")
	.controller("RestaurantListController", function($scope, restaurantList){

		var self = this;

		// LIST ORDER AND SEARCH STUFF
		$scope.list = [];
		$scope.listToDisplay = [];

		self.startModule = function(){
			console.log(restaurantList);
			$scope.list = restaurantList.data;
			$scope.listToDisplay = restaurantList.data;
		};

		self.startModule();
	});
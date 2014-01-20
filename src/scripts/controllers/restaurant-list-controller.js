angular.module("controllers")
	.controller("RestaurantListController", function($scope, restaurantList, RestaurantFilterService){

		var self = this;

		$scope.RestaurantFilterService = RestaurantFilterService;

		// LIST ORDER AND SEARCH STUFF
		$scope.list = [];
		$scope.listToDisplay = [];

		self.startModule = function(){
			$scope.list = restaurantList.data;
			$scope.listToDisplay = restaurantList.data;
		};

		self.startModule();
	});
angular.module("controllers")
	.controller("RestaurantListController", function($scope, restaurantList, RestaurantFilterService,
                                                   RestaurantPaginationService){

		var self = this;
		$scope.RestaurantFilterService = RestaurantFilterService;
		$scope.paging = RestaurantPaginationService;

		// LIST ORDER AND SEARCH STUFF
		$scope.list = [];
		$scope.listToDisplay = [];

		self.startModule = function(){
			$scope.list = restaurantList.data;
			$scope.listToDisplay = restaurantList.data;
			$scope.paging.totalCount = $scope.list.length;
		};

		self.startModule();
	});
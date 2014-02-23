angular.module("controllers")
	.controller("RestaurantListController", function($scope, restaurantList, RestaurantFilterService,
                                                   RestaurantPaginationService, SharedData, restaurantGuideService){

		var self = this;
		$scope.RestaurantFilterService = RestaurantFilterService;
		$scope.paging = RestaurantPaginationService;
		$scope.SharedData = SharedData;

		// LIST ORDER AND SEARCH STUFF
		$scope.list = [];
		$scope.listToDisplay = [];

		self.startModule = function(){
			$scope.list = restaurantList.data;
			$scope.listToDisplay = restaurantList.data;
			$scope.paging.totalCount = $scope.list.length;

			for (var i =0; i < $scope.list.length; i++){
				$scope.list[i].commentCount = null;
			}
		};

		self.startModule();
	});
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

			restaurantGuideService.getDisqusCounter()
				.then(function(data){
					var response = data.data.response;
					for (var i = 0; i < $scope.list.length; i++){
						for (var j = 0; j < response.length; j++){
							if ($scope.list[i]._id == response[j].identifiers[0]){
								$scope.list[i].posts = response[j].posts;
							}
						}
					}
				})
		};

		self.startModule();
	});
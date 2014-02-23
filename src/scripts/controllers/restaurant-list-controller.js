﻿angular.module("controllers")
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

			var arrayUrls = [];
			for (var i =0; i < $scope.list.length; i++){
				$scope.list[i].commentCount = null;
				arrayUrls.push("http://penedorj.com.br/#!/restaurantes/" + $scope.list[i]._id);
			}
			restaurantGuideService.getDisqusCounter(arrayUrls)
				.then(function(data){
					console.log(data);
				})
		};

		self.startModule();
	});
﻿angular.module("controllers")
	.controller("RestaurantListController", function($scope, restaurantList, RestaurantFilterService,
                                                   RestaurantPaginationService, SharedData, $timeout){

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
			$timeout(function(){
				$scope.SharedData.isLoading = false;
			}, 1800);
		};

		self.startModule();
	});
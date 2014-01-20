angular.module("controllers")
	.controller("HeaderController", function($scope, RestaurantFilterService){
		$scope.RestaurantFilterService = RestaurantFilterService;
	});
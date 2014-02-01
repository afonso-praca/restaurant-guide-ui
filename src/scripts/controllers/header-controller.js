angular.module("controllers")
	.controller("HeaderController", function($scope, RestaurantFilterService, $location){
		$scope.RestaurantFilterService = RestaurantFilterService;

		$scope.onHomeClicked = function(){
			$scope.RestaurantFilterService.textToSearch = "";
		};

		$scope.showSearch = function(){
			return ($location.path() === "/restaurantes");
		};
	});
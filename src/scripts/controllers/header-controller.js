angular.module("controllers")
	.controller("HeaderController", function($scope, RestaurantFilterService, $location, sessionService){
		$scope.RestaurantFilterService = RestaurantFilterService;

		$scope.session = sessionService;

		$scope.onHomeClicked = function(){
			$scope.RestaurantFilterService.textToSearch = "";
		};

		$scope.showSearch = function(){
			return ($location.path() === "/restaurantes");
		};
	});
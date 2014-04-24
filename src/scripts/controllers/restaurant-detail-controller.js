angular.module("controllers")
	.controller("RestaurantDetailController", function($scope, restaurant, SharedData, restaurantGuideService){

		var self = this;
		$scope.SharedData = SharedData;

		self.startModule = function(){
			$scope.restaurant = restaurant.data.restaurant;
			$scope.similars = restaurant.data.similars;
		};

		$scope.addComent = function(){
			alert("Essa funcionalidade estara disponivel em breve!");
//			restaurantGuideService.addComment(
//				{
//					comment: "Muito Bom",
//					stars: 3,
//					user: "3344556677",
//					restaurant_id: $scope.restaurant._id
//				}
//			);
		};

		self.startModule();
	});
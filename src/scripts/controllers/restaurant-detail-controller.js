angular.module("controllers")
	.controller("RestaurantDetailController", function($scope, restaurant, SharedData, restaurantGuideService, $rootScope){

		var self = this;
		$scope.SharedData = SharedData;
		$scope.restaurant = restaurant.data.restaurant;
		$scope.similars = restaurant.data.similars;

		$scope.currentComment = {
			title: "",
			body: "",
			stars: 0,
			user_id: 33,
			restaurant_id: $scope.restaurant._id
		};

		self.startModule = function(){

		};

		$scope.addComent = function(){
			//alert("Essa funcionalidade estara disponivel em breve!");
			restaurantGuideService.addComment($scope.currentComment).then(
				function(){
					console.log("sucesso");
					$scope.currentComment = {
						title: "",
						body: "",
						stars: 0,
						user_id: 33,
						restaurant_id: $scope.restaurant._id
					};
					SharedData.isLoading = true;
					restaurantGuideService.getRestaurantDetails($scope.restaurant._id).then(
						function(restaurant){
							$scope.restaurant = restaurant.data.restaurant;
							$scope.similars = restaurant.data.similars;
							SharedData.isLoading = false;
						},
						function(){
							console.log("erro");
							SharedData.isLoading = false;
						}
					);
				},
				function(){
					console.log("erro");
					SharedData.isLoading = false;
				}
			);
		};

		self.startModule();
	});
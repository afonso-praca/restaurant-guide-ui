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
			user_id: null,
			user_name: null,
			user_image: null,
			restaurant_id: $scope.restaurant._id
		};

		self.startModule = function(){

		};

		$scope.addComent = function(){

			// CONFIGURA O USUARIO ATUAL
			$scope.currentComment.user_id = $rootScope.session.currentUser._id;
			$scope.currentComment.user_name = $rootScope.session.currentUser.name;
			$scope.currentComment.user_image = $rootScope.session.currentUser.user_image;

			restaurantGuideService.addComment($scope.currentComment).then(
				function(){
					$scope.currentComment = {
						title: "",
						body: "",
						stars: 0,
						user_id: null,
						user_name: null,
						user_image: null,
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
angular.module("services")
	.service('restaurantGuideService', function($http) {

		var self = this;

		self.genericDataError = function(data, status, headers){
			var errorMessage = decodeURIComponent(headers()["x-error-message"]);
			var errorCode = headers()["x-error-code"];
		};

		return {
			getRestaurantList: function() {
				return $http({
					method: 'GET',
					url: "http://penedorj.com:3000/api/pvt/restaurants/",
					cache: false
				})
					.success(function(response) {
						return response;
					})
					.error(function(data, status, headers) {
						self.genericDataError(data, status, headers);
					});
			}
		}
	});
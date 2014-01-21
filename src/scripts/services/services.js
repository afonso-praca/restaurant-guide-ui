angular.module("services")
	.service('restaurantGuideService', function($http) {

		var self = this;
		self.endpoint = "http://penedorj.com:3000";

		self.genericDataError = function(data, status, headers){
			var errorMessage = decodeURIComponent(headers()["x-error-message"]);
			var errorCode = headers()["x-error-code"];
		};

		return {
			getRestaurantList: function() {
				return $http({
					method: 'GET',
					url: self.endpoint + "/api/pvt/restaurants/",
					cache: false
				})
					.success(function(response) {
						return response;
					})
					.error(function(data, status, headers) {
						self.genericDataError(data, status, headers);
					});
			},

			getRestaurantDetails: function(_id) {
				return $http({
					method: 'GET',
					url: self.endpoint + "/api/pvt/restaurants/" + _id + "/",
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
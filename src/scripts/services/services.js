angular.module("services")
	.service('restaurantGuideService', function($http) {

		var self = this;
		self.endpoint = "http://penedorj.com.br";

		self.genericDataError = function(data, status, headers){
			var errorMessage = decodeURIComponent(headers()["x-error-message"]);
			var errorCode = headers()["x-error-code"];
		};

		return {
			getRestaurantList: function() {
				return $http({
					method: 'GET',
					url: self.endpoint + "/api/restaurants/",
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
					url: self.endpoint + "/api/restaurants/" + _id + "/",
					cache: false
				})
					.success(function(response) {
						return response;
					})
					.error(function(data, status, headers) {
						self.genericDataError(data, status, headers);
					});
			},

			addComment: function(comment){
				return $http({
					method: 'POST',
					url: self.endpoint + "/api/restaurants/comments",
					data: comment,
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
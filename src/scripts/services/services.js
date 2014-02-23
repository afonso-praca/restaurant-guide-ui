angular.module("services")
	.service('restaurantGuideService', function($http) {

		var self = this;
		self.endpoint = "http://penedorj.com.br:3000";

		self.genericDataError = function(data, status, headers){
			var errorMessage = decodeURIComponent(headers()["x-error-message"]);
			var errorCode = headers()["x-error-code"];
		};

		return {
			getRestaurantList: function() {
				return $http({
					method: 'GET',
					url: self.endpoint + "/api/pvt/restaurants/",
					cache: true
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
					cache: true
				})
					.success(function(response) {
						return response;
					})
					.error(function(data, status, headers) {
						self.genericDataError(data, status, headers);
					});
			},

			getDisqusCounter: function(urlArray){
				return $http({
					method: 'GET',
					url: "https://disqus.com/api/3.0/threads/list",
					params: { api_key: "mQXEUI6cVnMEMrTu7zt5S4ISfDgTffQ8KUi54F7Gk2siiAiJm6yLjLVN4feTrxKt", forum : "penedorj", limit: 100 },
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
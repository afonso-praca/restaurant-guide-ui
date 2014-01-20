angular.module("services")
	.service("SharedData", function() {
		return {
			isLoading: false,
			successMessage: null,
			errorMessage: null
		};
	});
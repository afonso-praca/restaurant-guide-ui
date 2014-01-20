//
// RESTAURANT GUIDE UI - APP MAIN
//

angular.module("app", ["ngRoute", "controllers", "services"])

	.config(function($routeProvider, $sceProvider, $httpProvider) {

		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$sceProvider.enabled(false);

      $routeProvider.when('/restaurantes', {
				controller: "RestaurantListController",
				templateUrl: 'views/restaurant-list-view.html',
	      resolve: {
		      restaurantList: function(restaurantGuideService){
			      return restaurantGuideService.getRestaurantList();
		      }
	      }
			});

			$routeProvider.otherwise({
				redirectTo: '/restaurantes'
			});
		});

// BOOTSTRAPS ANGULAR APP
function initAngular() {
	angular.element(document).ready(function() {
		angular.bootstrap(document.getElementById("app-container"), ['app']);
	});
}

initAngular();
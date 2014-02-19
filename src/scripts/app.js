//
// RESTAURANT GUIDE UI - APP MAIN
//

angular.module("app", ["ngRoute", "controllers", "services", "filters", "directives"])

//	.config(['$location', function($location) {
//		$location.hashPrefix('!');
//	}])

	.config(function($routeProvider, $sceProvider, $httpProvider, $locationProvider) {

		$locationProvider.hashPrefix('!');

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

			$routeProvider.when('/restaurantes/:id', {
				controller: "RestaurantDetailController",
				templateUrl: 'views/restaurant-detail-view.html',
				resolve: {
					restaurant: function($route, restaurantGuideService){
						return restaurantGuideService.getRestaurantDetails($route.current.params.id);
					}
				}
			});

			$routeProvider.otherwise({
				redirectTo: '/restaurantes'
			});
		})
		.run(function($rootScope, SharedData, $timeout){
			$rootScope.$on('$routeChangeStart', function(){
				SharedData.isLoading = true;
			});
			$rootScope.$on('$routeChangeSuccess', function(){
				$timeout(function(){
					SharedData.isLoading = false;
				}, 500);
			});
		});

// BOOTSTRAPS ANGULAR APP
function initAngular() {
	angular.element(document).ready(function() {
		angular.bootstrap(document.getElementById("app-container"), ['app']);
	});
}

initAngular();
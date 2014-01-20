angular.module("services")
	.service("RestaurantFilterService", function($location){

		var self = this;

		// BUSCA DE TEXTO
		self.textToSearch = "";

		self.verifyParams = function(){
			if ($location.search().q){
				self.textToSearch = $location.search().q;
			}
		};

		self.setCurrentHash = function(){
			$location.search("q", (self.textToSearch !== "") ? self.textToSearch  : null);
		};
	});
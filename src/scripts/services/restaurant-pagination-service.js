angular.module("services")
	.service("RestaurantPaginationService", function($location){
		var self = this;

		self.totalCount = null;
		self.totalPages = null;
		self.currentPage = 1;
		self.perPage = 20;

		self.verifyParams = function(){
			if ($location.search().page){
				self.currentPage = Number($location.search().page);
			}
			if ($location.search().perPage){
				self.perPage = Number($location.search().perPage);
			}
		};

		self.setCurrentHash = function(){
			$location.search("page", self.currentPage);
			$location.search("perPage", self.perPage);
		};

	});
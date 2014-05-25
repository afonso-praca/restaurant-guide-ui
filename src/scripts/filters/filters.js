angular.module("filters", []);

angular.module("filters")
	.filter('orderByRelevance', function(){
		return function (input){
			input.sort(function(a,b){
				if (a.comments.length > b.comments.length)
					return -1;
				if (a.comments.length === b.comments.length)
					return 0;
				if (a.comments.length < b.comments.length)
					return 1;
				return 0;
			});
			return input;
		};
	});

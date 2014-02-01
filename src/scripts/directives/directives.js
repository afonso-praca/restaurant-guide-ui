angular.module("directives", [])
	.directive('imageonload', function() {
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.bind('load', function() {
					console.log($(element).parent().fadeIn());
				});
			}
		};
	});
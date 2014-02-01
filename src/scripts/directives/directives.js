angular.module("directives", [])
	.directive('imageonload', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.bind('load', function() {
					console.log('image is loaded');
					console.log($(element).parent().fadeIn());
				});
			}
		};
	});
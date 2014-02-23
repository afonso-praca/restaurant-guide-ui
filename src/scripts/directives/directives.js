angular.module("directives", [])
	.directive('imageonload', function() {
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.bind('load', function() {
					$(element).parent().parent().parent().css("margin-top", "20px");
					$(element).parent().fadeIn();
				});
			}
		};
	});
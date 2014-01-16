angular.module("filters", []);

angular.module("filters")
	.filter('substringFilter', function () {
		return function (input, value) {
			return (input.length > value) ? input.substr(0,value) + "..." : input;
		};
	});

angular.module("filters")
	.filter('partition', function($cacheFactory) {
		var arrayCache = $cacheFactory('partition');
		return function(arr, size) {
			if (!arr) { return; }
			var newArr = [];
			for (var i=0; i<arr.length; i+=size) {
				newArr.push(arr.slice(i, i+size));
			}
			var cachedParts;
			var arrString = JSON.stringify(arr);
			cachedParts = arrayCache.get(arrString+size);
			if (JSON.stringify(cachedParts) === JSON.stringify(newArr)) {
				return cachedParts;
			}
			arrayCache.put(arrString+size, newArr);
			return newArr;
		};
	});
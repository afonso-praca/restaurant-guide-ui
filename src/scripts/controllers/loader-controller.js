angular.module("controllers")
	.controller("LoaderController", function($scope, SharedData){
		$scope.SharedData = SharedData;
	});
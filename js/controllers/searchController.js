app.controller('searchController',
	['$scope', '$location', 'geoLookupService', 'conditionsService',
	function ($scope, $location, geoLookupService, conditionsService) {
		$scope.searchTerm = "";

		$scope.search = function() {
			alert($scope.searchTerm);
		};

		$scope.searchAuto = function() {
			alert("Auto searching");
		};
	}]
);